<template>
  <div
    v-show="mount"
    class="
      relative
      w-full
      min-h-screen
      font-sans
      antialiased
      bg-amber-100
      dark:bg-zinc-900
    "
  >
    <Navbar />
    <div
      class="
        container
        mx-auto
        px-5
        md:px-0
        lg:px-20
        xl:px-0
        2xl:px-24
        dark:invert
      "
    >
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      mount: false,
    }
  },
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
    this.mount = true
  },
})
</script>
