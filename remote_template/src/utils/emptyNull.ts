interface isLength {
  length: number
}

export const util = {

  isUndefined<T>(value: T):boolean {
    return typeof(value) === 'undefined';
  },

  isString<T>(value: T): boolean {
    return typeof(value) === 'string';
  },

  isEmpty<T extends isLength>(value: T): boolean {
    return !(value.length && (value.length === 0));

  },

  trim(data: string, prefix?: string): string | boolean {

    if (!prefix) {
      return data.trim();
    }
    prefix = prefix.split('').join('|');
    const re = new RegExp(`^[${prefix}]+|[${prefix}]+$`, 'g');
    return data.replace(re, '');
  },
};
