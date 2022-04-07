/**
 * All routes
 */

import HomeLayout from '@/layouts/HomeLayout.vue'
import ClubLayout from '@/layouts/ClubLayout.vue'
import NftLayout from '@/layouts/NftLayout.vue'
import UserLayout from '@/layouts/UserLayout.vue'

const HomeRoutes = [
  {
    path: '/',
    name: 'HomeLayout',
    component: HomeLayout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Home',
        alias: ['/index'],
        component: () =>
          import(/*webpackChunkName: "home" */ '@pages/home/Index.vue'),
      },
    ],
  },
]

const ClubRoutes = [
  {
    path: '/club',
    name: 'ClubLayout',
    component: ClubLayout,
    children: [
      {
        path: ':id',
        name: 'ClubDetail',
        component: () =>
          import(/*webpackChunkName: "club" */ '@pages/clubs/Index.vue'),
      },
    ],
  },
]

const NftRoutes = [
  {
    path: '/nft',
    name: 'NftLayout',
    component: NftLayout,
    children: [
      {
        path: ':id',
        name: 'NftHome',
        component: () =>
          import(/*webpackChunkName: "club" */ '@pages/nft/Home.vue'),
      },
    ],
  },
]

const UserRoutes = [
  {
    path: '/u',
    name: 'UserLayout',
    component: UserLayout,
    children: [
      {
        path: 'index',
        name: 'MyFounds',
        component: () =>
          import(/*webpackChunkName: "myfounds" */ '@pages/u/founds/Index.vue'),
      },
    ],
  },
]

const allRoutes = [...HomeRoutes, ...ClubRoutes, ...NftRoutes, ...UserRoutes]

export default allRoutes
