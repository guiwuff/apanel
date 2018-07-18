<template>
  <b-container fluid>
    <b-row>
      <b-col class="px-sm-4">
        <dashboard-title
          :title="pageTitle.text"
          :icon="pageTitle.icon" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="px-sm-4 py-4">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['pages']),
    slug () {
      return this.$route.name
    },
    pageTitle () {
      let pages = this.pages
      let page = pages.find((page) => {
        return page.slug === this.slug
      })
      return page
    }
  }
}
</script>
