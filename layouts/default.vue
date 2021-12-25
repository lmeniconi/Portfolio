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
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else if (
        localStorage.theme != 'light' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      }
    },
  },
  beforeMount() {
    this.checkDarkMode()
  },
})
</script>