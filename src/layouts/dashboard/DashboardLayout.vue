<template>
  <div id="wrapper" class="wrapper">
    <sidebar></sidebar>
    <div class="main-section" id="main_section">
      <top-navbar />
      <dashboard-content />
      <content-footer />
    </div>
  </div>
</template>

<script>
import TopNavbar from './TopNavbar'
import DashboardContent from './Content'
import ContentFooter from './ContentFooter'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter
  }
}
</script>

