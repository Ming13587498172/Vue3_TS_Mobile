/// <reference types="vite/client" />

interface Data<T> {
  code: string
  msg: string
  result: T
}

export declare module "axios" {
  interface AxiosResponse extends Data<T> {}
}

// declare module '*.vue' {
//   import { DefineComponent } from 'vue'
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
