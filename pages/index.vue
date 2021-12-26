<template>
  <div class="container mx-auto px-24">
    <section
      class="
        w-full
        h-screen
        flex flex-col
        justify-between
        pt-56
        pb-6
        dark:invert
      "
    >
      <div class="w-10/12 space-y-3">
        <h1
          class="text-7xl font-semibold animate__animated"
          :class="
            activeSection === 1 ? 'animate__fadeInUp' : 'animate__fadeOut '
          "
        >
          Desarrollador <br />
          <span class="bg-gradient text-gradient">Full-Stack</span>
        </h1>

        <p
          class="text-3xl font-light animate__animated"
          :class="
            activeSection === 1
              ? 'animate__fadeInUp animate-600'
              : 'animate__fadeOut animate-default'
          "
        >
          Digital Craftsman - Freelancer
        </p>
      </div>

      <div id="tech" class="w-full flex justify-center">
        <div
          class="
            w-5/12
            text-center
            bg-neutral-100 bg-opacity-20
            rounded-3xl
            animate__animated
            p-4
          "
          :class="
            activeSection === 1
              ? 'animate__fadeInUp animate-800'
              : 'animate__fadeOut animate-default'
          "
        >
          <div class="flex justify-around dark:invert">
            <a href="https://www.javascript.com/">
              <img src="@/assets/icons/js.svg" alt="JavaScript" />
            </a>
            <a href="https://vuejs.org/">
              <img src="@/assets/icons/vue.svg" alt="Vue" />
            </a>
            <a href="https://www.python.org/">
              <img src="@/assets/icons/python.svg" alt="Python" />
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="@/assets/icons/django.svg" alt="Django" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div
          class="
            flex flex-col
            justify-center
            items-center
            space-y-2
            text-center
            animate__animated
          "
          :class="
            activeSection === 1
              ? 'animate__fadeIn animate-1000'
              : 'animate__fadeOut animate-default'
          "
        >
          <ScrollDown />
          <p class="text-sm" style="font-family: 'Indie Flower', cursive">
            Scroll Down
          </p>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center pt-20 dark:invert">
      <div class="w-10/12 space-y-10">
        <h2
          class="
            w-fit
            text-5xl
            bg-gradient
            text-gradient
            font-semibold
            animate__animated
            py-2
          "
          :class="
            activeSection === 2
              ? 'animate__fadeInUp'
              : 'animate__fadeOut animate-default'
          "
        >
          Proyectos Recientes
        </h2>

        <div class="flex flex-wrap justify-around">
          <a
            v-for="i in 2"
            :key="i"
            href="https://brikku.com/"
            class="
              w-1/2
              group
              flex flex-col
              space-y-3
              text-center
              animate__animated
              px-16
              py-10
            "
            :class="
              activeSection === 2
                ? 'animate__fadeInUp'
                : 'animate__fadeOut animate-default'
            "
          >
            <div class="w-full aspect-w-8 aspect-h-5 dark:invert">
              <img
                src="@/assets/images/brikku.png"
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

            <div class="self-center w-10/12 space-y-1">
              <h3 class="text-2xl font-semibold">Brikku</h3>
              <p>Plataforma de busqueda de proveedores latinoamericanos</p>
            </div>
          </a>
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
              animate__animated
              px-6
              py-3
            "
            :class="
              activeSection === 2
                ? 'animate__fadeInUp animate-400'
                : 'animate__fadeOut animate-default'
            "
            >Ver todos</NuxtLink
          >
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center pt-20 pb-10 dark:invert">
      <div class="w-10/12 space-y-14">
        <h2
          class="
            w-fit
            text-5xl
            bg-gradient
            text-gradient
            font-semibold
            animate__animated
            py-2
          "
          :class="
            activeSection === 3
              ? 'animate__fadeInUp'
              : 'animate__fadeOut animate-default'
          "
        >
          Tecnologías
        </h2>

        <div class="space-y-12 text-center">
          <div
            class="space-y-8 animate__animated"
            :class="
              activeSection === 3
                ? 'animate__fadeInUp animate-200'
                : 'animate__fadeOut animate-default'
            "
          >
            <h3 class="text-4xl font-light">Lenguajes</h3>

            <div id="tech" class="w-full flex justify-center pb-10">
              <div
                class="
                  w-8/12
                  text-center
                  bg-neutral-100 bg-opacity-20
                  rounded-3xl
                  p-4
                "
              >
                <div class="flex flex-wrap dark:invert">
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://www.python.org/"
                  >
                    <img src="@/assets/icons/python.svg" alt="Python" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://www.javascript.com/"
                  >
                    <img src="@/assets/icons/js.svg" alt="JavaScript" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://go.dev/"
                  >
                    <img src="@/assets/icons/go.svg" alt="Go" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://www.php.net/"
                  >
                    <img src="@/assets/icons/php.svg" alt="PHP" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://developer.mozilla.org/es/docs/Web/HTML"
                  >
                    <img src="@/assets/icons/html.svg" alt="HTML" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://developer.mozilla.org/es/docs/Web/CSS"
                  >
                    <img src="@/assets/icons/css.svg" alt="CSS" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="space-y-8 animate__animated"
            :class="
              activeSection === 3
                ? 'animate__fadeInUp animate-400'
                : 'animate__fadeOut animate-default'
            "
          >
            <h3 class="text-4xl font-light">
              Front End <br />
              Frameworks
            </h3>

            <div id="tech" class="w-full flex justify-center pb-10">
              <div
                class="
                  w-8/12
                  text-center
                  bg-neutral-100 bg-opacity-20
                  rounded-3xl
                  p-4
                "
              >
                <div class="flex flex-wrap dark:invert">
                  <a
                    class="w-1/3 flex justify-center py-4"
                    href="https://vuejs.org/"
                  >
                    <img src="@/assets/icons/vue.svg" alt="Vue" />
                  </a>
                  <a
                    class="w-1/3 flex justify-center py-4"
                    href="https://nuxtjs.org/"
                  >
                    <img src="@/assets/icons/nuxt.svg" alt="Nuxt" />
                  </a>
                  <a
                    class="w-1/3 flex justify-center py-4"
                    href="https://inertiajs.com/"
                  >
                    <img src="@/assets/icons/inertia.svg" alt="Inertia" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="space-y-8 animate__animated"
            :class="
              activeSection === 3
                ? 'animate__fadeInUp animate-600'
                : 'animate__fadeOut animate-default'
            "
          >
            <h3 class="text-4xl font-light">
              Back End <br />
              Frameworks
            </h3>

            <div id="tech" class="w-full flex justify-center pb-10">
              <div
                class="
                  w-8/12
                  text-center
                  bg-neutral-100 bg-opacity-20
                  rounded-3xl
                  p-4
                "
              >
                <div class="flex flex-wrap dark:invert">
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://www.djangoproject.com/"
                  >
                    <img src="@/assets/icons/django.svg" alt="Django" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://fastapi.tiangolo.com/"
                  >
                    <img src="@/assets/icons/fastapi.svg" alt="Fast Api" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://laravel.com/"
                  >
                    <img src="@/assets/icons/laravel.svg" alt="Laravel" />
                  </a>
                  <a
                    class="w-1/4 flex justify-center py-4"
                    href="https://inertiajs.com/"
                  >
                    <img src="@/assets/icons/inertia.svg" alt="Inertia" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  computed: mapState({
    activeSection: 'activeSection',
  }),
})
</script>

<style lang="postcss" scoped>
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient {
  @apply bg-gradient-to-r from-amber-800 to-rose-500;
}

#tech a {
  @apply transition duration-500 transform;
}

#tech a:hover {
  @apply scale-110;
}
</style>
