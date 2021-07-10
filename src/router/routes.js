const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        name: 'test',
        path: '/test',
        component: () => import('pages/Test.vue'),
      },
      { path: '/Cards', component: () => import('pages/Cards.vue') },
      { path: '/Charts', component: () => import('pages/Charts.vue') },
      {
        path: '/reports/moulds',
        component: () => import('pages/Reports/Mould.vue'),
      },
      {
        name: 'Inspection',
        path: '/qc/inspections',
        component: () => import('pages/QC/Inspection.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
