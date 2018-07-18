import BootstrapVue from 'bootstrap-vue'
import { Sidebar, DashboardTitle, LineChart } from '@/components/index'

// css Assets
import '@/assets/scss/app.scss'
import '@/assets/css/themify-icons.css'

export default {
  install (Vue) {
    Vue.use(BootstrapVue)
    Vue.component('sidebar', Sidebar)
    Vue.component('dashboard-title', DashboardTitle)
    Vue.component('line-chart', LineChart)
  }
}
