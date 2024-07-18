import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/firebaseConfig'; 
import { onAuthStateChanged } from 'firebase/auth';

const routes = [
  {
    path: '/',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/registro',
    component: () => import('../views/RegistroView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const checkAuthState = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        console.log('Estado del usuario:', user); // Verificar el estado de autenticación
        resolve(user);
      });
    });
  };

  const user = await checkAuthState();

  if (to.meta.requiresAuth && !user) {
    next('/');
  } else if (!to.meta.requiresAuth && user && to.path === '/') {
    next('/home');
  } else {
    next();
  }
});

export default router;
