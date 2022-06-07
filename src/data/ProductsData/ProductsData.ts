import DataBase from '../../services/DataBase';

export default class ProductsData extends DataBase {
  async insertNewProductsProducts(productId: string, productName: string, productPrice: number, productQty: number): Promise<any> {
    return await this.connection().table('products').insert({
      product_id: productId,
      product_name: productName,
      product_price: +productPrice,
      product_qty_stock: +productQty
    });
  }
}