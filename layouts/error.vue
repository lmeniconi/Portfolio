<template>
  <section class="h-screen flex justify-center items-center">
    <div class="space-y-2 text-center">
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
}
</script>
