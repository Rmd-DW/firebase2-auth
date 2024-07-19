import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  auth
} from '../../auth';

const state = {
  user: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  getUser: state => state.user,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  async register({ commit }, { email, password }) {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      commit('setUser', user);
    } catch (error) {
      console.error(error);
    }
  },
  async login({ commit }, { email, password }) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      commit('setUser', user);
    } catch (error) {
      console.error(error);
    }
  },
  fetchUser({ commit }) {
    onAuthStateChanged(auth, user => {
      if (user) {
        commit('setUser', user);
      } else {
        commit('setUser', null);
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
