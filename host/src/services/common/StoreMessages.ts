import { makeAutoObservable } from 'mobx';
import { Item, SnackBarItemStatus } from '@consta/uikit/SnackBar';

class StoreMessages {
  constructor() {
    makeAutoObservable(this);
  }

  list: Item[] = [];

  private newMessage = (item:Item) => this.list.push(item);

  private removeMessage = (key:string) => {
    this.list = this.list.filter(item => item.key !== key);
  };

  setMessage = (message: string, status: SnackBarItemStatus) => {
    const key = String(Date.now());
    const newItem: Item = {
      message,
      status,
      key: String(key),
      onClose: () => this.removeMessage(key),
    };
    this.newMessage(newItem);
  };

}

const storeMessages = new StoreMessages();
export default storeMessages;
