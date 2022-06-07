import {Request, Response} from 'express';
import {ProductsController} from './application/ProductsController';
import app from './business/applicationBusiness/ApplicationLogic';


app.put('/products/insert-new', (req: Request, res: Response) => new ProductsController().insertNewProduct(req, res));