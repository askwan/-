/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/advertise',
  component: Layout,
  redirect: '/advertise/config',
  name: 'Advertise',
  meta: {
    title: '广告管理',
    icon: 'table'
  },
  children: [
    {
      path: 'config',
      component: () => import('@/views/advertise-manage/config'),
      name: 'AdConfig',
      meta: { title: '广告配置' }
    },{
      path:"test",
      component: () => import('@/views/advertise-manage/config'),
      name: 'Test',
      meta: { title: '测试广告' }
    }
  ]
}
export default tableRouter
