import { makeAutoObservable } from 'mobx';

class StoreKfa {
  constructor() {
    makeAutoObservable(this);
  }
  counter = 0;

  inc = () => ++this.counter;
  dec = () => --this.counter;

}



const storeKfa = new StoreKfa();
export { storeKfa };
