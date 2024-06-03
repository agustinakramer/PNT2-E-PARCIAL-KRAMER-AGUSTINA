<template>
  <div>
    <h1 class="display-4">Procesador de Texto</h1>
    <ProcesadorTexto />
  </div>
</template>

<script>
import ProcesadorTexto from '../components/ProcesadorTexto.vue';

export default {
  components: {
    ProcesadorTexto
  }
};
</script>

<style scoped>
h1 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
</style>