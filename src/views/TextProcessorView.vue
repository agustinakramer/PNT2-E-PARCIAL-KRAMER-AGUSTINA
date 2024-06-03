<template>
  <div>
    <h1 class="display-4">Procesador de Texto</h1>
    <TextProcessor />
  </div>
</template>

<script>
import TextProcessor from '../components/TextProcessor.vue';

export default {
  components: {
    TextProcessor
  }
};
</script>

<style scoped>
h1 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
</style>