/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
  // 可以在這裡添加更多環境變量
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
