const cloneObj = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj)) as T;
};

export default cloneObj;
