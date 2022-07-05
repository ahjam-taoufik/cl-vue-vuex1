
export const actionAuthModule={
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  }