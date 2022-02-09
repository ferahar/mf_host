const compareObject = (a: unknown, b: unknown) => {
  if (typeof(a) === 'object' && typeof(b) === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return false;
};

export  default compareObject;
