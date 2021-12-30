<template>
  <div class="relative md:hidden" v-click-outside="handleClickOutside">
    <button
      @click="toggle"
      class="border border-neutral-800 rounded-lg p-2 dark:invert"
    >
      <img src="@/assets/icons/menu.svg" alt="Modo Oscuro" />
    </button>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <nav
        v-show="dropdown"
        @click="toggle"
        class="absolute pt-2 right-1/4 text-lg dark:text-white"
      >
        <NuxtLink
          class="
            rounded-t-lg
            bg-white
            hover:bg-gray-100
            dark:bg-neutral-800 dark:hover:bg-neutral-900
            py-4
            pr-20
            pl-3
            block
            whitespace-nowrap
          "
          to="/projects"
          >Proyectos</NuxtLink
        >
        <a
          class="
            rounded-b-lg
            bg-white
            hover:bg-gray-100
            dark:bg-neutral-800 dark:hover:bg-neutral-900
            py-4
            pr-20
            pl-3
            block
            whitespace-nowrap
          "
          target="_blank"
          href="https://github.com/lmeniconi/Portfolio"
        >
          Source Code
        </a>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      dropdown: false,
    }
  },
  methods: {
    toggle() {
      this.dropdown = !this.dropdown
    },
    handleClickOutside() {
      if (this.dropdown) {
        this.toggle()
      }
    },
  },
})
</script>

<style lang="postcss" scoped>
button img {
  @apply max-h-6 md:max-h-8 xl:max-h-max;
}
</style>