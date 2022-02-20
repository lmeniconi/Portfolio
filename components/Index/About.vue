<template>
  <section class="container-2 mx-auto space-y-8 py-20">
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
      Acerca de mí
    </h2>

    <div class="w-full md:w-10/12 mx-auto space-y-8 md:text-lg xl:text-xl">
      <p class="lg:indent-8">
        Soy un desarrollador chileno con pasión por la creación de servicios
        digitales. Desde pequeño me atrajo la idea de la resolución de problemas
        de la vida real a través del código.
      </p>
      <div class="w-full md:w-10/12 mx-auto space-y-4">
        <p>
          <span class="bg-gradient text-gradient font-medium">Actualidad</span>
          > Estoy trabajando como Full-Stack Developer en
          <a
            class="text-red-500 font-medium hover:underline"
            href="https://asimov.cl/"
            target="_blank"
            >Asimov</a
          >
        </p>
        <p>
          <span class="bg-gradient text-gradient font-medium">Actualidad</span>
          > Estoy finalizando la carrera de Ingeniería en computación e
          informática en la Universidad Andrés Bello.
        </p>

        <div class="space-y-2">
          <p>
            <span class="bg-gradient text-gradient font-medium">Mis redes</span>
            <span class="hidden lg:inline">></span>
          </p>
          <div class="w-full lg:w-11/12 mx-auto space-y-1">
            <div
              class="
                flex
                justify-center
                lg:justify-start
                space-x-2
                hover:underline
              "
            >
              <img src="@/assets/icons/github.svg" alt="" />
              <a target="_blank" href="https://github.com/lmeniconi/"
                >@lmeniconi</a
              >
            </div>
            <div
              class="
                flex
                justify-center
                lg:justify-start
                space-x-2
                hover:underline
              "
            >
              <img src="@/assets/icons/instagram.svg" alt="" />
              <a target="_blank" href="https://www.instagram.com/aattano/"
                >@aattano</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>