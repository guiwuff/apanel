<template>
  <div>
    <btn-nav-small class="ml-2" v-if="expandedAll" text="-" v-b-tooltip.hover title="Collapse" />
    <btn-nav-small class="ml-2" v-else text="+" v-b-tooltip.hover title="Expand"/>
    <ul class="list-unstyled menu" :class="{ expanded : expandedAll }" id="sidebar_menu">
      <li v-for="menu in pages"
        :key="menu.index">
        <router-link :to="getPath(menu.slug)">
          <i :class="getIcon(menu.icon)"></i>{{ menu.text }} <small v-if="menu.children"><i class="ti-arrow-circle-down float-right mt-1"></i></small>
          <ul v-if="menu.children" class="top-dropdown" id="dropdown_user">
            <li v-for="child in menu.children" :key="child.index"><a href="#">{{ child }}</a></li>
          </ul>
        </router-link>
      </li>
    </ul>
    <btn-nav-small class="ml-2" v-if="expandedAll" text="-" v-b-tooltip.hover title="Collapse"/>
    <btn-nav-small class="ml-2" v-else text="+" v-b-tooltip.hover title="Expand"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BtnNavSmall from './ButtonNavSmall'

export default {
  name: 'sidebar-menu',
  components: {
    BtnNavSmall
  },
  computed: {
    ...mapGetters(['expandedAll', 'pages'])
  },
  methods: {
    getPath: (slug) => {
      return '/' + slug
    },
    getIcon: (icon) => {
      return icon + ' mr-2'
    }
  }
}
</script>
