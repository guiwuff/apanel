<template>
  <div class="sidebar" id="sidebar">
    <b-container fluid>
      <b-row>
        <b-col class="py-2">
          <b-btn-close size="sm" @click="toggleSidebar"></b-btn-close>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div id="brand" class="brand text-center">
            <router-link to="/"
              v-b-tooltip.hover title="APanel Dashboard"><img src="../assets/img/apanel-logo.svg" alt="APanel"></router-link>
          </div>
          <div id="user_info" class="user-info text-center mb-4">
            <div class="avatar px-5 py-4">
              <img src="../assets/img/user-avatar.png" alt="Username" class="rounded img-fluid">
            </div>
            <b-btn-group>
              <b-btn variant="danger" size="sm" class="text-uppercase" v-b-tooltip.hover title="Signout">
                <small><span class="ti-power-off"></span></small>
              </b-btn>
              <b-btn variant="primary" size="sm">
                <small><span class="ti-settings"></span></small>
              </b-btn>
              <b-btn variant="primary" size="sm">
                <small><span class="ti-email"></span></small>
              </b-btn>
              <b-btn variant="primary" size="sm">
                <small><span class="ti-bell"></span></small>
              </b-btn>
              <b-btn variant="primary" size="sm">
               <small> <span class="ti-user"></span></small>
              </b-btn>
            </b-btn-group>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <sidebar-menu />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SidebarMenu from './SidebarMenu'

export default {
  name: 'sidebar',
  components: {
    SidebarMenu
  },
  methods: {
    ...mapActions(['toggleSidebar'])
  }
}
</script>
