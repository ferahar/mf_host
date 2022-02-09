import { makeAutoObservable } from 'mobx';

export default class StoreMessages {
  constructor() {
    makeAutoObservable(this);
  }
}
