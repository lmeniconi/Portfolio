<template>
  <section
    class="
      h-screen
      flex
      justify-center
      items-center
      font-sans
      antialiased
      bg-amber-100
      dark:bg-zinc-900
    "
  >
    <div class="space-y-2 text-center dark:invert">
      <div class="text-6xl bg-gradient text-gradient py-2">
        <h1 v-if="error.statusCode === 404">Pagina no encontrada</h1>
        <h1 v-else>Ha ocurrido un error</h1>
      </div>

      <div>
        <NuxtLink class="text-2xl hover:underline" to="/"
          >Volver a inicio</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'none', // you can set a custom layout for the error page
}
</script>
