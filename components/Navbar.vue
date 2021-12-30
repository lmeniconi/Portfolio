<template>
  <div
    class="
      fixed
      top-0
      left-0
      w-full
      flex
      justify-between
      backdrop-blur-sm
      px-3
      md:px-10
      xl:px-24
      2xl:px-56
      pt-10
      pb-2
      z-10
    "
  >
    <nav
      class="
        flex
        items-center
        space-x-6
        xl:space-x-10
        text-lg
        xl:text-xl
        dark:invert
      "
    >
      <NuxtLink id="name" to="/" class="flex items-center space-x-1">
        <img
          class="
            max-h-6
            md:max-h-full
            transition-transform
            duration-500
            rotate-20
          "
          src="@/assets/icons/code.svg"
          alt=""
        />
        <span
          class="
            text-lg
            lg:text-xl
            xl:text-2xl
            font-semibold
            tracking-wide
            md:tracking-wider
          "
          >Luciano Meniconi</span
        >
      </NuxtLink>
      <NuxtLink class="link" to="/projects">Proyectos</NuxtLink>
      <!-- <NuxtLink class="link" to="/#technologies">Tecnologías</NuxtLink> -->
      <a
        class="hidden md:flex space-x-1 hover:underline"
        target="_blank"
        href="https://github.com/lmeniconi/Portfolio"
      >
        <img src="@/assets/icons/github.svg" alt="Github" />
        <span>Source</span>
      </a>
    </nav>

    <div class="flex space-x-2">
      <DarkModeBtn />
      <Menu />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="postcss" scoped>
#name:hover img {
  @apply rotate-0;
}

.link {
  @apply hidden md:block hover:underline;
}
</style>