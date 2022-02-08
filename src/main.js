import dayjs from 'dayjs'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    day: dayjs()
  },
  mutations: {
    increment (state) {
      state.day = state.day.add(1, "month");
    },
    decrement (state) {
      state.day = state.day.subtract(1, "month");
    },
    reset (state) {
      state.day = dayjs();
    }
  },
  getters: {
    day: state => state.day
  }
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
