import {actionAuthModule} from './actionAuthModule.js'
import {gettersAuthModule} from './gettersAuthModule.js'
import {mutationAuthModule} from './mutationAuthModule.js'

const authModule = {
    state() {
      return {
        isAuth: false,
      };
    },
    mutations: mutationAuthModule,
    getters: gettersAuthModule,
    actions: actionAuthModule
  };
export default authModule;