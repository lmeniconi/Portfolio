<template>
  <div class="w-full text-center py-5 dark:invert">
    <span class="opacity-50"
      >&copy; {{ year }} Luciano Meniconi. All Rights Reserved.</span
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
})
</script>