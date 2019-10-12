/**
 *
 * 功能描述:
 *
 * @className ConfigRouter
 * @projectName mis-front
 * @author yanshaowen
 * @date 2019/9/8 17:07
 */
import Main from '@/components/overall/Main.vue'

export default [
  {
    path: '/',
    name: 'Index',
    components:  require('@/components/overall/Main.vue'),
    children: [
      {
        path: 'bucket',
        name: 'IndexBucket',
        component: () => import('@/views/IndexBucket.vue')
      },
      {
        path: 'setup',
        name: 'IndexSetup',
        component: () => import('@/views/IndexSetup.vue')
      }
    ]
  }
]
