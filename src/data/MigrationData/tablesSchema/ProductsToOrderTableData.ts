import DataBase from '../../../services/DataBase';

export default class ProductsToOrderTableData extends DataBase {
  public async createOrdersTableRequest(){
    return await this.connection().schema.createTable('products_to_orders', (table: any) => {
      table.string('products_to_order_id').primary();
      table.string('product_id').notNullable();
      table.string('order_id').notNullable();
      table.integer('product_order_qty').notNullable();
      table.foreign('product_id').references('product_id').inTable('products');
      table.foreign('order_id').references('order_id').inTable('orders');
    }).then(() => console.log('Table "products_to_orders" successful created!'));
  }

  // async populateproducts_order_Table(){
  // 	return await this.connection().table('products_order_').insert(userDummyData)
  // 		.then(()=> console.log('Table "products_order_" successful populated!'));
  // }
}