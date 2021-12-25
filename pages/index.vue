<template>
  <div class="container mx-auto px-24 dark:invert">
    <section class="w-full h-screen flex flex-col justify-between pt-56 pb-6">
      <div class="w-10/12 space-y-3">
        <h1 class="text-7xl font-semibold">
          Desarrollador <br />
          <span
            id="full-stack"
            class="bg-gradient-to-r from-amber-800 to-rose-500"
            >Full-Stack</span
          >
        </h1>
        <p class="text-3xl font-light">Digital Craftsman- Freelancer</p>
      </div>

      <div id="tech" class="w-full flex justify-center">
        <div
          class="w-5/12 text-center bg-neutral-100 bg-opacity-20 rounded-3xl p-4"
        >
          <div class="flex justify-around">
            <a href="https://www.python.org/">
              <img src="@/assets/icons/python.svg" alt="Python" />
            </a>
            <a href="https://vuejs.org/">
              <img src="@/assets/icons/vue.svg" alt="Vue" />
            </a>
            <a href="https://www.javascript.com/">
              <img src="@/assets/icons/js.svg" alt="JavaScript" />
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="@/assets/icons/django.svg" alt="Django" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col justify-center items-center space-y-2 text-center"
      >
        <ScrollDown />
        <p class="text-sm" style="font-family: 'Indie Flower', cursive">
          Scroll Down
        </p>
      </div>
    </section>

    <section class="h-screen">
      <p class="prose">jeje</p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="postcss" scoped>
#full-stack {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#tech a {
  @apply transition duration-500 transform;
}

#tech a:hover {
  @apply scale-110;
}
</style>
