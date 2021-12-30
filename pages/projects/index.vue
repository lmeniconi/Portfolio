<template>
  <div class="container-2 mx-auto text-center lg:text-left">
    <ProjectsRecents />
    <ProjectsExperimental />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    const title = 'Proyectos - Luciano Meniconi'
    const description = 'Proyectos de Luciano Meniconi'

    return {
      title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: title,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://lucianomeniconi.com/projects',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
      ],
    }
  },
})
</script>
