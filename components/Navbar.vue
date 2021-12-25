<template>
  <div
    class="fixed top-0 left-0 w-full flex justify-between px-64 pt-10 pb-6 z-10"
  >
    <nav class="flex items-center space-x-10 text-xl dark:invert">
      <NuxtLink
        id="name"
        to="/"
        class="flex space-x-1 text-2xl font-semibold tracking-wider"
      >
        <img
          class="transition-transform duration-500 rotate-20"
          src="@/assets/icons/code.svg"
          alt=""
        />
        <span>Luciano Meniconi</span>
      </NuxtLink>
      <NuxtLink class="hover:underline" to="/projects">Projectos</NuxtLink>
      <NuxtLink class="hover:underline" to="/labs">Labs</NuxtLink>
      <NuxtLink class="hover:underline" to="/labs">Tecnologías</NuxtLink>
      <a
        class="flex space-x-1 hover:underline"
        href="https://github.com/lmeniconi/Portfolio"
      >
        <img src="@/assets/icons/github.svg" alt="" />
        <span>Source</span>
      </a>
    </nav>

    <DarkModeBtn />
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
</style>