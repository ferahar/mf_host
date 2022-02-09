const isNaturelNumber = (str: string | null ): boolean => {
  const regex = /^[0-9]+$/;
  return (typeof(str) === 'string' && regex.test(str));
};

export default isNaturelNumber;
