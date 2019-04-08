import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // 登陆
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  // 首页
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // 文章添加页面
  {
    path: '/addnote',
    component: Layout,
    name: 'note',
    meta: {
      title: '文章添加',
      icon: 'edit'
    },
    children: [
      // { path: 'index', component: () => import('@/views/shopApply/applyIndex'), name: 'shopIndex', meta: { title: '店铺类型' }},
      { path: '0', component: () => import('@/views/addNote/addnote'), name: 'student0', meta: { title: '大学生文章' }},
      { path: '1', component: () => import('@/views/addNote/addnote'), name: 'student1', meta: { title: '大学生文章' }},
      { path: '2', component: () => import('@/views/addNote/addnote3'), name: 'student3', meta: { title: '富文本编辑器' }}
      // { path: '1', component: () => import('@/views/bigstudent/addnote'), name: 'jobMarket', meta: { title: '职场文章' }},
      // { path: 'exclusiveShop', component: () => import('@/views/shopApply/exclusiveShop'), name: 'exclusiveShop', meta: { title: '专卖店', noLeave: true }},
      // { path: 'personalShop', component: () => import('@/views/shopApply/personalShop'), name: 'personalShop', meta: { title: '个人店', noLeave: true }}
    ]
  },
  // 数据添加
  {
    path: '/addData',
    component: Layout,
    name: 'addData',
    meta: {
      title: '数据添加',
      icon: 'edit'
    },
    children: [
      { path: 'label', component: () => import('@/views/addData/label'), name: 'label', meta: { title: '标签数据' }},
      { path: 'area', component: () => import('@/views/addData/area'), name: 'area', meta: { title: '省市数据' }},
      { path: 'major', component: () => import('@/views/addData/major'), name: 'major', meta: { title: '专业数据' }},
      { path: 'link', component: () => import('@/views/addData/friendLink'), name: 'friendLink', meta: { title: '友情链接' }}
    ]
  },
  // 文章列表

  {
    path: '/noteList',
    component: Layout,
    redirect: '/noteList/list',
    name: 'NoteList',
    meta: {
      title: '文章列表',
      icon: 'list'
    },
    children: [
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/noteList/list'),
        name: 'EditArticle',
        meta: { title: 'editArticle', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/noteList/list'),
        name: 'ArticleList',
        meta: { title: '文章列表000' }
      },
      {
        path: 'list0',
        component: () => import('@/views/noteList/list'),
        name: 'ArticleList2',
        meta: { title: '文章列表111' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'clipboardDemo', icon: 'clipboard' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
