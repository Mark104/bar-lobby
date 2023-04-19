// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/debug/': RouteRecordInfo<'/debug/', '/debug', Record<never, never>, Record<never, never>>,
    '/debug/b': RouteRecordInfo<'/debug/b', '/debug/b', Record<never, never>, Record<never, never>>,
    '/debug/controls': RouteRecordInfo<'/debug/controls', '/debug/controls', Record<never, never>, Record<never, never>>,
    '/debug/font': RouteRecordInfo<'/debug/font', '/debug/font', Record<never, never>, Record<never, never>>,
    '/debug/pixi-map': RouteRecordInfo<'/debug/pixi-map', '/debug/pixi-map', Record<never, never>, Record<never, never>>,
    '/debug/script-launcher': RouteRecordInfo<'/debug/script-launcher', '/debug/script-launcher', Record<never, never>, Record<never, never>>,
    '/debug/test': RouteRecordInfo<'/debug/test', '/debug/test', Record<never, never>, Record<never, never>>,
    '/development/': RouteRecordInfo<'/development/', '/development', Record<never, never>, Record<never, never>>,
    '/development/game-dev': RouteRecordInfo<'/development/game-dev', '/development/game-dev', Record<never, never>, Record<never, never>>,
    '/development/lobby-dev': RouteRecordInfo<'/development/lobby-dev', '/development/lobby-dev', Record<never, never>, Record<never, never>>,
    '/development/map-dev': RouteRecordInfo<'/development/map-dev', '/development/map-dev', Record<never, never>, Record<never, never>>,
    '/development/server-dev': RouteRecordInfo<'/development/server-dev', '/development/server-dev', Record<never, never>, Record<never, never>>,
    '/development/website-dev': RouteRecordInfo<'/development/website-dev', '/development/website-dev', Record<never, never>, Record<never, never>>,
    '/home/': RouteRecordInfo<'/home/', '/home', Record<never, never>, Record<never, never>>,
    '/home/donate': RouteRecordInfo<'/home/donate', '/home/donate', Record<never, never>, Record<never, never>>,
    '/home/changes': RouteRecordInfo<'/home/changes', '/home/changes', Record<never, never>, Record<never, never>>,
    '/home/news': RouteRecordInfo<'/home/news', '/home/news', Record<never, never>, Record<never, never>>,
    '/home/overview': RouteRecordInfo<'/home/overview', '/home/overview', Record<never, never>, Record<never, never>>,
    '/home/store': RouteRecordInfo<'/home/store', '/home/store', Record<never, never>, Record<never, never>>,
    '/library/': RouteRecordInfo<'/library/', '/library', Record<never, never>, Record<never, never>>,
    '/library/commands': RouteRecordInfo<'/library/commands', '/library/commands', Record<never, never>, Record<never, never>>,
    '/library/guides': RouteRecordInfo<'/library/guides', '/library/guides', Record<never, never>, Record<never, never>>,
    '/library/maps/': RouteRecordInfo<'/library/maps/', '/library/maps', Record<never, never>, Record<never, never>>,
    '/library/maps/[id]': RouteRecordInfo<'/library/maps/[id]', '/library/maps/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/library/replays': RouteRecordInfo<'/library/replays', '/library/replays', Record<never, never>, Record<never, never>>,
    '/library/units': RouteRecordInfo<'/library/units', '/library/units', Record<never, never>, Record<never, never>>,
    '/login': RouteRecordInfo<'/login', '/login', Record<never, never>, Record<never, never>>,
    '/multiplayer/': RouteRecordInfo<'/multiplayer/', '/multiplayer', Record<never, never>, Record<never, never>>,
    '/multiplayer/battle': RouteRecordInfo<'/multiplayer/battle', '/multiplayer/battle', Record<never, never>, Record<never, never>>,
    '/multiplayer/casual': RouteRecordInfo<'/multiplayer/casual', '/multiplayer/casual', Record<never, never>, Record<never, never>>,
    '/multiplayer/custom': RouteRecordInfo<'/multiplayer/custom', '/multiplayer/custom', Record<never, never>, Record<never, never>>,
    '/multiplayer/ranked': RouteRecordInfo<'/multiplayer/ranked', '/multiplayer/ranked', Record<never, never>, Record<never, never>>,
    '/multiplayer/tournaments': RouteRecordInfo<'/multiplayer/tournaments', '/multiplayer/tournaments', Record<never, never>, Record<never, never>>,
    '/profile/': RouteRecordInfo<'/profile/', '/profile', Record<never, never>, Record<never, never>>,
    '/profile/[id]': RouteRecordInfo<'/profile/[id]', '/profile/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/profile/achievements': RouteRecordInfo<'/profile/achievements', '/profile/achievements', Record<never, never>, Record<never, never>>,
    '/profile/matches': RouteRecordInfo<'/profile/matches', '/profile/matches', Record<never, never>, Record<never, never>>,
    '/profile/overview': RouteRecordInfo<'/profile/overview', '/profile/overview', Record<never, never>, Record<never, never>>,
    '/profile/stats': RouteRecordInfo<'/profile/stats', '/profile/stats', Record<never, never>, Record<never, never>>,
    '/singleplayer/': RouteRecordInfo<'/singleplayer/', '/singleplayer', Record<never, never>, Record<never, never>>,
    '/singleplayer/campaign': RouteRecordInfo<'/singleplayer/campaign', '/singleplayer/campaign', Record<never, never>, Record<never, never>>,
    '/singleplayer/custom': RouteRecordInfo<'/singleplayer/custom', '/singleplayer/custom', Record<never, never>, Record<never, never>>,
    '/singleplayer/scenarios': RouteRecordInfo<'/singleplayer/scenarios', '/singleplayer/scenarios', Record<never, never>, Record<never, never>>,
    '/singleplayer/tutorials': RouteRecordInfo<'/singleplayer/tutorials', '/singleplayer/tutorials', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
