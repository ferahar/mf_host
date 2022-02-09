const routeInclude = (path: string, route: string): boolean => {
  if (path === route) return true;
  const result = path.includes(route) && route !== '/';
  return result;
};

export default routeInclude;
