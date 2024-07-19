import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // Importa el store principal
import HomeView from '../views/HomeView.vue';

const RegistroView = () => import('../views/RegistroView.vue');
const LoginView = () => import('../views/LoginView.vue');
const AboutView = () => import('../views/AboutView.vue');

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: "/signup",
    name: "signup",
    component: RegistroView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.getters['userState/isAuthenticated']; 
  console.log(isAuthenticated); 
  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
