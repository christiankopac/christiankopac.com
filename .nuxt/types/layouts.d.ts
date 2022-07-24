import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/christian/Developer/projects/christiankopac.com/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}