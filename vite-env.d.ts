/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly RAPID_API_SK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
