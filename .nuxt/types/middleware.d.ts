import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/christian/Developer/projects/christiankopac.com/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}