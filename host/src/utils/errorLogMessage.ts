const handler = (e: ErrorEvent) => {
  console.log(e.message);
  e.preventDefault();
};

export const hiddenErrorMessage = () => {
  window.addEventListener('error', handler);
};

export const showErrorMessage = () => {
  window.removeEventListener('error', handler);
};
