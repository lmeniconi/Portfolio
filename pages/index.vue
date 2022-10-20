<template>
  <div>
    <IndexHero />
    <IndexProjects />
    <IndexAbout />
    <IndexTechs />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    const title = 'Luciano Meniconi - Portafolio'
    const description = 'Portafolio de Luciano Meniconi - Full Stack Developer'

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
          content: 'https://lucianomeniconi.com/',
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
