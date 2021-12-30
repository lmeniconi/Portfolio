<template>
  <div class="flex flex-wrap">
    <NuxtLink
      v-for="project in projects"
      :key="project.name"
      :to="`/projects/${project.id}`"
      class="
        w-full
        md:w-1/2
        group
        space-y-4
        text-center
        md:px-6
        lg:px-10
        xl:px-16
        py-10
      "
    >
      <div class="w-full aspect-w-8 aspect-h-5 dark:invert">
        <img
          :src="require(`@/assets/images/${project.img}`)"
          alt="Brikku"
          class="
            w-full
            h-full
            object-center object-cover
            rounded-3xl
            transition
            duration-500
            transform
            group-hover:opacity-90 group-hover:scale-105
          "
        />
      </div>

      <div class="w-full md:w-11/12 lg:w-10/12 space-y-1 mx-auto">
        <h3 class="text-2xl font-semibold">{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    projects: Array,
    propClass: String,
  },
})
</script>