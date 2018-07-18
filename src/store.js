import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expandedAll: false,
    expanded: false,
    sidebarActive: false,
    pages: [
      {
        slug: 'dashboard',
        text: 'Dashboard',
        icon: 'ti-panel',
        children: false
      },
      {
        slug: 'users',
        text: 'Users',
        icon: 'ti-user',
        children: [
          'Stats',
          'New User',
          'User Setup',
          'Groups',
          'History'
        ]
      },
      {
        slug: 'bets',
        text: 'Bets',
        icon: 'ti-exchange-vertical',
        children: [
          'Stats',
          'Pending',
          'Completed',
          'Adjustment',
          'History'
        ]
      },
      {
        slug: 'payments',
        text: 'Payments',
        icon: 'ti-money',
        children: [
          'Summary',
          'Pending',
          'Completed',
          'Tracking',
          'History'
        ]
      },
      {
        slug: 'reports',
        text: 'Reports',
        icon: 'ti-bar-chart',
        children: [
          'Stats',
          'New User',
          'User Setup',
          'Groups',
          'History'
        ]
      },
      {
        slug: 'products',
        text: 'Products',
        icon: 'ti-package',
        children: [
          'Summary',
          'Setup',
          'Bonus',
          'Turn Over',
          'History'
        ]
      }
    ]
  },
  getters: {
    expandedAll: (state) => {
      return state.expandedAll
    },
    expanded: (state) => {
      return state.expanded
    },
    pages: (state) => {
      return state.pages
    },
    sidebarActive: (state) => {
      return state.sidebarActive
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebarActive = !state.sidebarActive
    },
    TOGGLE_MENU_ALL: (state) => {
      state.expandedAll = !state.expandedAll
    },
    EXPAND: (state, payload) => {
      state.expanded = payload.data
    }
  },
  actions: {
    toggleSidebar: (context) => {
      context.commit('TOGGLE_SIDEBAR')
    },
    toggleMenuAll: (context) => {
      context.commit('TOGGLE_MENU_ALL')
    },
    expand: (context, payload) => {
      context.commit('EXPAND', payload)
    }
  }
})
