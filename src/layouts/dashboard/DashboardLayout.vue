<template>
  <div id="wrapper" class="wrapper">
    <sidebar :class="{active:sidebarActive}"></sidebar>
    <div class="main-section" id="main_section">
      <top-navbar />
      <dashboard-content />
      <content-footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopNavbar from './TopNavbar'
import DashboardContent from './Content'
import ContentFooter from './ContentFooter'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter
  },
  computed: {
    ...mapGetters(['sidebarActive'])
  }
}
</script>
