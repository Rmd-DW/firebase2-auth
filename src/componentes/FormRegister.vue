<template>
  <div>
    <h1>Bienvenidos al Registro</h1>
    <div class="registro-form">
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Correo electrónico" required>
        <input v-model="password" type="password" placeholder="Contraseña" required>
        <button type="submit">Registrarse</button>
        <h2 v-if="showMessage" class="success-message">Usuario registrado</h2>
        <h2 v-if="errorMessage" class="error-message">{{ errorMessage }}</h2>
      </form>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from '@/auth';
import { auth } from '@/auth'; 

export default {
  data() {
    return {
      email: '',
      password: '',
      showMessage: false,
      errorMessage: ''  
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        this.showMessage = true;
        this.errorMessage = '';
        console.log('Usuario registrado:', user);
      } catch (error) {
        this.errorMessage = this.getErrorMessage(error.code);
        this.showMessage = false;
        console.error('Error al registrar:', error.message);
      }
    },
    getErrorMessage(code) {
      switch (code) {
        case 'auth/email-already-in-use':
          return 'El correo electrónico ya está en uso.';
        case 'auth/invalid-email':
          return 'Correo electrónico inválido. Verifica el formato.';
        case 'auth/weak-password':
          return 'La contraseña es muy débil. Intenta con otra.';
        default:
          return 'Error al registrarse. Intenta nuevamente.';
      }
    }
  }
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}

h2 {
  color: #2c3e50;
}

form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  margin: 0 auto; 
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

.success-message {
  color: rgb(23, 216, 23);
  margin-top: 1rem;
  border: 1px solid greenyellow;
}

.error-message {
  color: red;
  margin-top: 1rem;
  border: 1px solid red;
}
</style>
