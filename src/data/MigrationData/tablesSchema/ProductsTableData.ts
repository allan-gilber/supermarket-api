import DataBase from '../../../services/DataBase';

export default class ProductsTableData extends DataBase {
  public async createProductsTable(){
    return await this.connection().schema.createTable('products', (table: any) => {
      table.string('product_id').primary();
      table.string('product_name').notNullable().unique();
      table.decimal('product_price', 8, 2).notNullable();
      table.integer('product_qty_stock').notNullable();
    }).then(() => console.log('Table "products" successful created!'));
  }

  // async populateProductsTable(){
  // 	return await this.connection().table('products').insert(userDummyData)
  // 		.then(()=> console.log('Table "products" successful populated!'));
  // }
}