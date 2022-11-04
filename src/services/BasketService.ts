import $api from "../http";
import { AxiosResponse } from "axios";
import { IBasket } from "../modeles/IBasket";
import { IUser } from "../modeles/IUser";

export default class BasketService {
  static fetchBasket(uset: IUser): Promise<AxiosResponse<IBasket>> {
    return $api.get<IBasket>('basket');
  }
}
