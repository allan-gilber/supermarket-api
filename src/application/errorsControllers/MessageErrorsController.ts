import errorMessageBusiness from '../../business/errorBusiness/ErrorMessageBusiness';
import {errorMessage} from '../../model/errorMessage';

export default class MessageErrorsController {
  getErrorMessage(errorCode: string): errorMessage {
    return new errorMessageBusiness().requestErrorMessage(errorCode);
  }
}