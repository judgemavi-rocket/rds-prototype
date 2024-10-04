type ClassValue = 
  | string
  | number
  | boolean
  | undefined
  | null
  | { [key: string]: any }
  | ClassValue[];

const toVal = (mix: ClassValue): string => {
  if (typeof mix === 'string' || typeof mix === 'number') return String(mix);
  if (typeof mix === 'boolean' || mix == null) return '';
  
  let str = '';
  
  if (Array.isArray(mix)) {
    for (let item of mix) {
      const val = toVal(item);
      if (val) str += (str && ' ') + val;
    }
  } else if (typeof mix === 'object') {
    for (let key in mix) {
      if (mix.hasOwnProperty(key) && mix[key]) {
        str += (str && ' ') + key;
      }
    }
  }
  
  return str;
};

export const mergeClasses = (...args: ClassValue[]): string => {
  let str = '';
  for (let arg of args) {
    const val = toVal(arg);
    if (val) str += (str && ' ') + val;
  }
  return str;
};