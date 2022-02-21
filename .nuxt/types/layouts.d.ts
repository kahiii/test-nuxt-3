import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "F:/Projets/Projets pro/MYCOACH/my-coach-public/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}