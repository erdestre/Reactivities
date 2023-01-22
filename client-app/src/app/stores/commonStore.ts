import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
  error: ServerError | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  setServerError(error: ServerError) {
    this.error = error;
  }
}
// @observable token: string | null = window.localStorage.getItem("jwt");
// @observable appLoaded = false;
// @observable user: User | null = null;
// @observable refreshTokenTimeout: any;
// @observable refreshToken: string | null = null;
// @observable refreshTokenTimeout: any;
// @observable refreshToken: string | null = null;
