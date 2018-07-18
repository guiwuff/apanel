<template>
  <b-btn
    @click="toggleMenuAll"
    variant="warning" size="sm" class="py-0 px-1 text-uppercase btn-nav-small my-2">
    {{ text }}
  </b-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    text: String
  },
  methods: {
    ...mapActions(['toggleMenuAll'])
  }
}
</script>
