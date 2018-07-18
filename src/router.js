import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout'
import Dashboard from '@/pages/Dashboard'
import Users from '@/pages/Users'
import Bets from '@/pages/Bets'
import Payments from '@/pages/Payments'
import Reports from '@/pages/Reports'
import Products from '@/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/bets',
          name: 'bets',
          component: Bets
        },
        {
          path: '/payments',
          name: 'payments',
          component: Payments
        },
        {
          path: '/reports',
          name: 'reports',
          component: Reports
        },
        {
          path: '/products',
          name: 'products',
          component: Products
        }
      ]
    }
  ]
})
