/// <reference types="react" />

declare async function __webpack_init_sharing__(a: string): Promise;

interface __webpack_share_scopes__ {
  default,
}

declare global {
  interface Window {
    __remotes__: Record<string, string>;
  }

  const __webpack_init_sharing__: any;
  const __webpack_share_scopes__: any;
}

