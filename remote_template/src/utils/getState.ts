type Indexed = {
  [key in string]: unknown | Indexed;
};

export function getState<T>(obj: unknown, path: string): T | null {
  const args = path.split('.');

  if (typeof(obj) !== 'object') return null;

  let result:Indexed = obj as Indexed;

  for (let i = 0; i < args.length; i++) {
    const arg: keyof Indexed = args[i];
    if (!arg || !result.hasOwnProperty(arg)) {
      return null;
    }

    result = result[arg] as Indexed;
  }
  return result as T;
}
