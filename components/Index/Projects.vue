<template>
  <section class="container-2 mx-auto space-y-10 py-20">
    <h2
      class="
        w-fit
        mx-auto
        lg:mx-0
        text-4xl
        xl:text-5xl
        bg-gradient
        text-gradient
        font-semibold
        py-2
      "
    >
      Proyectos Recientes
    </h2>

    <div class="w-full animate__animated">
      <Projects :projects="projects" />
    </div>

    <div class="w-full flex justify-center">
      <NuxtLink
        to="projects"
        class="
          bg-amber-800
          text-lg text-white
          rounded-lg
          transition
          duration-500
          transform
          hover:scale-105
          px-6
          py-3
        "
        >Ver todos</NuxtLink
      >
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import projects from '@/data/projects'

export default Vue.extend({
  props: {
    show: Boolean,
  },
  data() {
    return {
      projects,
    }
  },
})
</script>