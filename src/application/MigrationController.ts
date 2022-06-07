import TableSchemaBusiness from '../business/MigrationBusiness/TableSchemaBusiness';
import DataBase from '../services/DataBase';

export class MigrationController extends DataBase {
  public async startMigration(){
    try {
      console.clear();
      await new TableSchemaBusiness().createProductsTableSchema()
        .then(() => console.log('Table Schema successfully created!'));
      // await new PopulationBusiness().populateUsersTable()
      // 	.then(() => console.log('all tables has been successfully populated!'));
    } catch (error: any){
      console.log('error in MigrationController:', error);
    } finally {
      this.closeConnection();
    }
    return;
  }
}

new MigrationController().startMigration();