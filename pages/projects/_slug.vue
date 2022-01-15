<template>
  <div class="container-2 mx-auto text-center lg:text-left">
    <section class="min-h-screen space-y-10 pt-32 md:pt-56 pb-20">
      <div
        class="flex items-center space-x-2 animate__animated animate__fadeInUp"
      >
        <NuxtLink
          class="
            text-lg
            md:text-xl
            xl:text-2xl
            bg-gradient
            text-gradient
            font-semibold
          "
          to="/projects"
          >Proyectos</NuxtLink
        >
        <span class="text-lg md:text-xl xl:text-2xl">></span>
        <h1 class="text-4xl xl:text-5xl font-medium py-2">
          {{ project.name }}
        </h1>
      </div>

      <article class="w-full md:w-10/12 lg:w-9/12 mx-auto space-y-8">
        <h2
          class="
            text-xl
            md:text-2xl
            animate__animated animate__fadeInUp animate-400
          "
        >
          {{ project.description }}
        </h2>
        <ul
          class="
            text-lg
            md:text-xl
            space-y-3
            lg:px-10
            break-words
            animate__animated animate__fadeInUp animate-400
          "
        >
          <li>
            <span class="bg-gradient text-gradient font-medium pr-2"
              >Tecnologías</span
            >
            <span v-for="tech in project.techs" :key="tech.name" class="px-2">{{
              tech
            }}</span>
          </li>
          <li v-if="project.website">
            <span class="bg-gradient text-gradient font-medium pr-2">Web</span>
            <a
              class="text-neutral-800 hover:underline"
              target="_blank"
              :href="project.website"
              >{{ project.website }}
            </a>
          </li>
          <li v-else-if="project.demo">
            <span class="bg-gradient text-gradient font-medium pr-2">Demo</span>
            <a
              class="text-neutral-800 hover:underline"
              target="_blank"
              :href="project.demo"
              >{{ project.demo }}
            </a>
          </li>
          <li v-else>
            <span class="bg-gradient text-gradient font-medium pr-2">Demo</span>
            <span class="text-neutral-800">No disponible</span>
          </li>
          <li v-if="project.source">
            <span class="bg-gradient text-gradient font-medium pr-2"
              >Source</span
            >
            <a
              class="text-neutral-800 hover:underline"
              target="_blank"
              :href="project.source"
              >{{ project.source }}</a
            >
          </li>
        </ul>

        <div
          class="
            space-y-8
            dark:invert
            animate__animated animate__fadeInUp animate-600
          "
        >
          <img
            class="max-h-80 rounded-xl mx-auto"
            :src="require(`@/assets/images/${project.img}`)"
            :alt="project.name"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

import projects from '@/data/projects'

export default Vue.extend({
  data() {
    return {
      project: null,
    }
  },
  created() {
    console.log('route:', this.$route)
    const project = projects.find(
      (project) => project.id === this.$route.params.slug
    )

    if (!project) {
      this.$nuxt.error({ statusCode: 404 })
    } else {
      this.project = project
    }
  },
  head() {
    const title = `Proyecto - Luciano Meniconi`
    const description = `Proyecto por Luciano Meniconi`

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
