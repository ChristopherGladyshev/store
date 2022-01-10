import $api from "../http";
import { AxiosResponse } from "axios";
import { IUser } from "../modeles/IUser";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('users');
  }
}