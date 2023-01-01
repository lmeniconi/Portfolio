<template>
  <section v-if="projects.length > 0" class="py-20">
    <h1
      class="w-fit mx-auto lg:mx-0 text-4xl xl:text-5xl bg-gradient text-gradient font-semibold animate__animated animate__fadeInUp py-2"
    >
      Proyectos Experimentales
    </h1>

    <Projects
      :projects="projects"
      class="animate__animated animate__fadeInUp animate-100"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import projects from '@/data/projects'

export default Vue.extend({
  computed: {
    projects: function () {
      return projects.filter((project) => project.labs === true)
    },
  },
})
</script>
