const hostStore: ShellStore = {};

const hostStoreInit = (store: ShellStore) => {
  hostStore.storeMessages = store.storeMessages;
};

export default hostStore;

export {
  hostStoreInit,
};
