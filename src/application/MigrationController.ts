import TableSchemaBusiness from '../business/MigrationBusiness/TableSchemaBusiness';
import DataBase from '../services/DataBase';

export class MigrationController extends DataBase {
  public async startMigration(){
    try {
      console.clear();
      await new TableSchemaBusiness().createProductsTableSchema().then(() => new TableSchemaBusiness().createOrdersTableSchema()).then(() => new TableSchemaBusiness().createProductsToOrdersTableSchema())
        .then(() => {
          console.log('Table Schema successfully created!');
          process.exit();
        });
      // await new PopulationBusiness()
      // 	.then(() => console.log('all tables has been successfully populated!'));
    } catch (error: any){
      console.log('error in MigrationController:', error);
      process.exit();
    } finally {
      this.closeConnection();
    }
    return;
  }
}

new MigrationController().startMigration();