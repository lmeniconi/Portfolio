<template>
  <div id="tech" class="w-full">
    <div
      class="
        w-11/12
        md:w-10/12
        xl:w-8/12
        text-center
        bg-neutral-100 bg-opacity-20
        rounded-3xl
        mx-auto
        p-4
      "
    >
      <div class="flex flex-wrap dark:invert">
        <a
          v-for="tech in techs"
          :key="tech.name"
          :class="`w-1/2 md:w-1/4 flex justify-center py-5 md:py-4`"
          :href="tech.href"
          target="_blank"
        >
          <img :src="require(`@/assets/icons/${tech.img}`)" :alt="tech.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
  props: {
    techs: Array,
  },
})
</script>

<style lang="postcss" scoped>
#tech a {
  @apply transition duration-500 transform;
}

#tech a:hover {
  @apply scale-110;
}

#tech img {
  @apply max-h-10 md:max-h-max;
}
</style>