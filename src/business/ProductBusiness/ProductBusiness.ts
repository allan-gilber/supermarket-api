import {Request} from 'express';
import ProductsData from '../../data/ProductsData/ProductsData';
import IdGenerator from '../../services/IdGenerator';


export default class ProductsBusiness {
  public async insertNewProduct(req: Request){

    const {productName, productPrice, productQty} = req.body;

    if (!productName || !productPrice || !productQty) throw new Error('emptyParamtersForInsertNewProduct');
    console.log(isNaN(productPrice), isNaN(parseFloat(productPrice)) ,!productPrice.includes('.'), !(productPrice.split('.')[1].length === 2));
    if (isNaN(productPrice) && isNaN(parseFloat(productPrice)) || !productPrice.includes('.') || !(productPrice.split('.')[1].length === 2)) throw new Error('invalidParamterForProductPrice');
    if (Number.isInteger(productQty) && productQty > 0) throw new Error('invalidValueForQuantity');

    const productId = new IdGenerator().generateId();

    return await new ProductsData().insertNewProductsProducts(productId, productName, productPrice, productQty);
  }

  // public async editProducts(): Promise<void>{
  //   return await new OrdersProductsData().createOrdersProductsRequest();
  // }
}