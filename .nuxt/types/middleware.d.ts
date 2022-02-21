import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "F:/Projets/Projets pro/MYCOACH/my-coach-public/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}