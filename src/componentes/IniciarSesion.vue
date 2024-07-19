<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <div class="login-form">
      <form @submit.prevent="signIn">
        <input v-model="email" type="email" placeholder="Correo electrónico" required>
        <input v-model="password" type="password" placeholder="Contraseña" required>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <router-link to="/signup">Regístrate ahora</router-link>
      <p v-if="authenticated" style="color: green;">¡Usuario autenticado correctamente!</p>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      authenticated: false,
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions('userState', ['login']),
    async signIn() {
      try {
        const { email, password } = this;
        await this.login({ email, password });
        this.authenticated = true;
        this.errorMessage = '';
        this.$router.push('/'); // Redirige a la ruta raíz después del inicio de sesión exitoso
      } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        this.errorMessage = this.getErrorMessage(error.code);
        this.authenticated = false;
      }
    },
    getErrorMessage(code) {
      switch (code) {
        case 'auth/user-not-found':
          return 'Usuario no encontrado. Verifica tu correo electrónico.';
        case 'auth/wrong-password':
          return 'Contraseña incorrecta. Intenta nuevamente.';
        case 'auth/invalid-email':
          return 'Correo electrónico inválido. Verifica el formato.';
        default:
          return 'Error al iniciar sesión. Intenta nuevamente.';
      }
    }
  }
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}

form {
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
}

input {
  padding: 0.5rem;
  margin: 0.2rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #36a174;
}

.login-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  margin: 2rem auto;
}

.login-form form {
  display: flex;
  flex-direction: column;
}

.login-form a {
  margin-top: 1rem;
  text-align: center;
  color: #42b983;
  text-decoration: none;
}

.login-form a:hover {
  text-decoration: underline;
}
</style>
