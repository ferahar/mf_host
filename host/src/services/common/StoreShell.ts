import { makeAutoObservable } from 'mobx';

class StoreShell {

  constructor() {
    makeAutoObservable(this);
  }

  isDark = false;
  isOpenMainMenu = false;
  currentTitle = 'ИАСУРГ';

  toggleOpenMenu = () => {
    this.isOpenMainMenu = ! this.isOpenMainMenu;
  };

  setTitle = (value: string) => this.currentTitle = value;

}

const storeShell = new StoreShell();

export default storeShell;
