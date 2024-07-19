import { createStore } from 'vuex';
import userState from './modules/userState';

const store = createStore({
  modules: {
    userState, 
  },
});

export default store;
