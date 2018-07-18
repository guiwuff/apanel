<template>
  <h3 class="page-title">{{ title }} <i :class="icon" class="ml-2"></i></h3>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String
  }
}
</script>
