<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/signup">Registrate</router-link>|
    <router-link to="/login">Inicia Sesión</router-link>
      </nav>
      <router-view/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BarraNavegacion',
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    margin-bottom: 20px;
  }
  
  nav a {
    text-decoration: none;
    color: #42b983;
  }
  
  nav a.router-link-exact-active {
    font-weight: bold;
  }
  </style>
  