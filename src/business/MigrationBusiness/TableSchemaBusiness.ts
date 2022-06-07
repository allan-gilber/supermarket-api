import OrdersTableData from '../../data/migrationData/tablesSchema/OrdersTableData';
import ProductsTableData from '../../data/migrationData/tablesSchema/ProductsTableData';
import ProductsToOrderTableData from '../../data/migrationData/tablesSchema/ProductsToOrderTableData';

export default class TableSchemaBusiness {
  public async createProductsTableSchema(){
    return await new ProductsTableData().createProductsTable();
  }

  public async createOrdersTableSchema(){
    return await new OrdersTableData().createOrdersTableRequest();
  }

  public async createProductsToOrdersTableSchema(){
    return await new ProductsToOrderTableData().createOrdersTableRequest();
  }
}