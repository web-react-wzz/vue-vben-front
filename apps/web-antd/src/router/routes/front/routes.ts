import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'gpcDesign',
    path: '/gpcDesign',
    component: () => import('#/views/front/GPC/index.vue'),
    meta: {
      icon: 'lucide:backpack',
      order: -1,
      title: $t('page.front.GPC'),
    },
  },
  {
    name: 'SolidMaterial',
    path: '/solidMaterial',
    component: () => import('#/views/front/SolidMaterial/index.vue'),
    meta: {
      icon: 'lucide:building-2',
      order: -1,
      title: $t('page.front.solid'),
    },
  },
];

export default routes;
