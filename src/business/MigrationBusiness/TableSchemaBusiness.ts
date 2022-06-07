import OrdersTableData from '../../data/MigrationData/tablesSchema/OrdersTableData';
import ProductsTableData from '../../data/MigrationData/tablesSchema/ProductsTableData';


export default class TableSchemaBusiness {
  public async createProductsTableSchema(){
    return await new ProductsTableData().createProductsTable();
  }

  public async createOrdersTableSchema(){
    return await new OrdersTableData().createOrdersTableRequest();
  }
}