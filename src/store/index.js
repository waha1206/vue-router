import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
    LoginUserInfo: null
  },
  // 異步
  actions: {
    updateNumAsync(context, payload) {
      setTimeout(() => {
        context.commit("addNum", payload);
      }, 3000);
    }
  },
  // 同步，突變，所有 state 裡面的數值都要透過 mutations 來做修改
  mutations: {
    addNum(state, payload) {
      state.num += payload;
    },
    userLogin(state, user) {
      if (user) {
        console.log(user);
        state.LoginUserInfo = user;
        console.log(state.LoginUserInfo.UserName);
      }
    }
  },
  modules: {},
  getters: {
    getLoginUserName(state) {
      return state.LoginUserInfo ? state.LoginUserInfo.UserName : "未登錄";
    }
  }
});
