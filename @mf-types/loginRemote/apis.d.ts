export type RemoteKeys = 'loginRemote/Button' | 'loginRemote/app';
type PackageType<T> = T extends 'loginRemote/app'
  ? typeof import('loginRemote/app')
  : T extends 'loginRemote/Button'
    ? typeof import('loginRemote/Button')
    : unknown;
