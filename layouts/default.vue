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
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      mount: false,
      sections: null
    }
  },
  watch: {
    $route() {
      this.$store.commit('setActiveSection', 1)
      setTimeout(() => {
        this.sections = document.querySelectorAll('section')
      }, 100)
    },
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
  mounted() {
    this.sections = document.querySelectorAll('section')

    window.addEventListener('scroll', () => {
      var current;
      
      this.sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        if (pageYOffset >= sectionTop - 500) {
          current = index + 1
        }
      })

      this.$store.commit('setActiveSection', current)
    })
  },
})
</script>