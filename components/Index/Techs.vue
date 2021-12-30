<template>
  <section id="technologies" class="container-2 mx-auto space-y-14 pt-16 py-20">
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
      Tecnologías
    </h2>

    <div class="space-y-16 text-center">
      <div class="space-y-8">
        <h3 class="text-3xl lg:text-4xl font-light">Lenguajes</h3>

        <Techs :techs="langs" />
      </div>

      <div class="space-y-8">
        <h3 class="text-3xl lg:text-4xl font-light">
          Front End <br />
          Frameworks
        </h3>

        <Techs :techs="frontend" />
      </div>

      <div class="space-y-8">
        <h3 class="text-3xl lg:text-4xl font-light">
          Back End <br />
          Frameworks
        </h3>

        <Techs :techs="backend" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { langs, frontend, backend } from '@/data/techs'

export default Vue.extend({
  props: {
    show: Boolean,
  },
  data() {
    return {
      langs,
      frontend,
      backend,
    }
  },
})
</script>