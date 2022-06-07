import {errorMessageObject} from '../../model/errorMessage';

export const errorMessagesData: errorMessageObject  = {
  genericError: {status: 500, message:'oops, something went wrong!'},
  // empty/incomplete
  emptyParamtersForInsertNewProduct: {status: 400,message:'please, provide a valid product name, price and quantity.'},
  // invalid
  invalidParamterForProductPrice: {status: 400, message:'please, provide a valid number for product price that has only two decimals after dot.'},
  invalidValueForQuantity: {status: 400, message:'please, provide valid positive number for quantity of the product in stock.'},
  // already in use
  // impossibility to change or to do
  // successful
  successfullyInsertedNewProduct: {status: 201, message: 'succesfully inserted new product!'},
  // database errors
  ER_DUP_ENTRY: {status:400,message:'product already registered.'}
};