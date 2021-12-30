<template>
  <div class="w-full text-center pt-10 xl:pt-20 pb-5 dark:invert">
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