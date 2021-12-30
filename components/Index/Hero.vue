<template>
  <section
    class="w-full h-screen flex items-center pt-28 md:pt-56 pb-2 md:pb-6"
  >
    <div class="w-full h-5/6 md:h-full flex flex-col justify-between">
      <div class="w-full lg:w-10/12 space-y-3 text-center lg:text-left">
        <h1
          class="
            text-4xl
            md:text-7xl
            font-semibold
            animate__animated animate__fadeInUp
          "
        >
          Desarrollador <br />
          <span class="bg-gradient text-gradient">Full-Stack</span>
        </h1>

        <p
          class="
            text-xl
            md:text-3xl
            font-light
            animate__animated animate__fadeInUp animate-600
          "
        >
          Digital Craftsman - Freelancer
        </p>
      </div>

      <div id="tech">
        <div
          class="
            w-full
            md:w-8/12
            xl:w-5/12
            text-center
            bg-neutral-100 bg-opacity-20
            rounded-3xl
            animate__animated animate__fadeInUp animate-800
            mx-auto
            p-4
          "
        >
          <div class="flex justify-around dark:invert">
            <a href="https://www.javascript.com/" target="_blank">
              <img src="@/assets/icons/js.svg" alt="JavaScript" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
              <img src="@/assets/icons/vue.svg" alt="Vue" />
            </a>
            <a href="https://www.python.org/" target="_blank">
              <img src="@/assets/icons/python.svg" alt="Python" />
            </a>
            <a href="https://www.djangoproject.com/" target="_blank">
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
            animate__animated animate__fadeIn animate-1000
          "
        >
          <ScrollDown />
          <p class="text-sm" style="font-family: 'Indie Flower', cursive">
            Scroll Down
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
