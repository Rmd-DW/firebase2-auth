<template>
  <div id="app">
    <BarraNavegacion />
  </div>
</template>

<script>
import BarraNavegacion from './componentes/BarraNavegacion.vue';

export default {
  name: 'App',
  components: {
    BarraNavegacion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
