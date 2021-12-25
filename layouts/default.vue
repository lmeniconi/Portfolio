<template>
  <section
    class="
      relative
      w-full
      min-h-screen
      font-sans
      antialiased
      bg-amber-100
      dark:bg-zinc-800
    "
  >
    <Navbar />
    <Nuxt />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    checkDarkMode() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },
  beforeMount() {
    // this.checkDarkMode()
  },
})
</script>