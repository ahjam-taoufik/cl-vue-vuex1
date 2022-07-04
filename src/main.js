import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      maxValue: 50,
      minValue: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },

    incrementNmb(state, nmb = 1) {
      state.counter += nmb;
    },
    decrementNmb(state, nmb = 1) {
      state.counter -= nmb;
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getCounterInterval(state, getters) {
      if (state.counter < state.minValue) {
        return state.minValue;
      } else if (state.counter > state.maxValue) {
        return state.maxValue;
      }
      return getters.getCounter;
    },
  },
  actions:{
    increment(ctxt){
       
      //you can Run Async in Action 
      setTimeout(function(){
        ctxt.commit('increment') //increment :  mutation
      },2000)
       
    },
    incrementByNumber(ctxt,payload){
      console.log(payload);
        ctxt.commit('incrementNmb',payload.value)  
    }
  }
});

const app = createApp(App);
app.use(store);

app.mount('#app');
