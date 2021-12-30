<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutDown"
  >
    <button
      v-show="show"
      @click="toggleDarkMode"
      class="bg-violet-600 dark:bg-amber-300 rounded-lg p-2"
    >
      <img
        class="dark:hidden"
        src="@/assets/icons/moon.svg"
        alt="Modo Oscuro"
      />
      <img
        class="hidden dark:block"
        src="@/assets/icons/sun.svg"
        alt="Modo Dia"
      />
    </button>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      show: true,
    }
  },
  methods: {
    toggleDarkMode() {
      this.show = false

      setTimeout(() => {
        const docClassList = document.documentElement.classList
        if (docClassList.contains('dark')) {
          docClassList.remove('dark')
          localStorage.theme = 'light'
        } else {
          docClassList.add('dark')
          localStorage.theme = 'dark'
        }

        this.show = true
      }, 200)
    },
  },
})
</script>

<style lang="postcss" scoped>
button img {
  @apply max-h-6 md:max-h-8 xl:max-h-max;
}
</style>