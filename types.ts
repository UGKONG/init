// declare type not = null | undefined;
// declare type a = any;
// declare type s = string;
// declare type n = number;
// declare type b = boolean;
// declare type v = void;
// declare type sn = s | number;
// declare type P<T = v> = Promise<T>;
// declare type OrNull<T> = T | null;

export interface User {
  id: n;
  name: s;
}

export interface Version {
  version: s;
  now: s;
  developer: s;
}
