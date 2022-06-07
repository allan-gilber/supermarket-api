import DataBase from '../../../services/DataBase';

export default class OrdersTableData extends DataBase {
  public async createOrdersTableRequest(){
    return await this.connection().schema.createTable('orders', (table: any) => {
      table.string('order_id').primary();
      table.string('order_client_name').notNullable();
      table.decimal('order_total', 8, 2);
      table.datetime('order_shipping_date').notNullable();
    }).then(() => console.log('Table "orders" successful created!'));
  }

  // async populateOrdersTable(){
  // 	return await this.connection().table('Orders').insert(userDummyData)
  // 		.then(()=> console.log('Table "Orders" successful populated!'));
  // }
}