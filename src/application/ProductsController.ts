import ProductsBusiness from '../business/ProductBusiness/ProductBusiness';
import {Request, Response} from 'express';
import DataBase from '../services/DataBase';
import MessageErrorsController from './errorsControllers/MessageErrorsController';

export class ProductsController extends DataBase {
  async insertNewProduct(req: Request, resp: Response){
    try {
      await new ProductsBusiness().insertNewProduct(req);

      resp.statusCode = 201;
      resp.send({message: new MessageErrorsController().getErrorMessage('successfullyInsertedNewProduct').message});
    } catch (error: any){
      console.log('error in ProductsController:', error?.code || error?.message);

      const errorMessage = new MessageErrorsController().getErrorMessage(error?.code || error?.message);
      resp.statusCode = errorMessage.status;

      resp.send({message: errorMessage.message});
    } finally {
      this.closeConnection();
    }
    return;
  }
}