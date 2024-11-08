const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("obj must be an object");
  }
  for (const key of keys) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
};
