const textInclude = (pathname:string, path:string) => {
  console.log(pathname, path);
  return pathname.includes(path);
};

export default textInclude;
