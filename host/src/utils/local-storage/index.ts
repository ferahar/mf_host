export const saveState = <T>(state: T) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    window.console.error('[ERROR] Could not save state to localStorage', e);
  }
};

export const loadState = <T>(): T | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as T;
  } catch {
    return undefined;
  }
};
