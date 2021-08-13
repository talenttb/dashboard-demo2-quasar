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
        name: 'Moulds',
        path: '/reports/moulds',
        component: () => import('pages/reports/Mould.vue'),
      },
      {
        name: 'WorkOrder',
        path: '/reports/WorkOrder',
        component: () => import('pages/reports/WorkOrder.vue'),
      },
      {
        name: 'History',
        path: '/reports/History',
        component: () => import('pages/reports/History.vue'),
      },
      {
        name: 'Traceability',
        path: '/reports/traceability',
        component: () => import('pages/reports/Traceability.vue'),
      },
      {
        name: 'Inspection',
        path: '/qc/inspections',
        component: () => import('pages/QC/Inspection.vue'),
      },
      {
        name: 'EquimentOutputStatus',
        path: '/monitor/equipment-output-status',
        component: () => import('pages/monitor/EquimentOutputStatus.vue'),
      },
      {
        name: 'ForgingMachineActivationRate',
        path: '/monitor/forging-machine-activation-rate',
        component: () =>
          import('pages/monitor/ForgingMachineActivationRate.vue'),
      },
      {
        name: 'ForgingMachineCurrentStatus',
        path: '/monitor/forging-machine-current-status',
        component: () =>
          import('pages/monitor/ForgingMachineCurrentStatus.vue'),
      },
      {
        name: 'TVView',
        path: '/monitor/tv-view',
        component: () => import('pages/monitor/TVView.vue'),
      },
      {
        name: 'MachineStatusMonitor',
        path: '/monitor/machine-status',
        component: () => import('pages/monitor/MachineStatusMonitor.vue'),
      },
      {
        name: 'Maintenance',
        path: '/equipment/maintenance',
        component: () => import('pages/equipment/Maintenance.vue'),
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
