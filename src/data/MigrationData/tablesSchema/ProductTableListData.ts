import DataBase from '../../../services/DataBase';

export default class ProductsOrderListTableData extends DataBase {
  public async createOrdersTableRequest(){
    return await this.connection().schema.createTable('orders', (table: any) => {
      table.string('products_order_list_id').primary();
      table.string('products_order_list_product_name').notNullable();
      table.datetime('products_order_list_shipping_date').notNullable();
      table.string('products_order_list_product_list_id', 8, 2).notNullable().unique();
    }).then(() => console.log('Table "products_order_list_" successful created!'));
  }

  // async populateproducts_order_list_Table(){
  // 	return await this.connection().table('products_order_list_').insert(userDummyData)
  // 		.then(()=> console.log('Table "products_order_list_" successful populated!'));
  // }
}