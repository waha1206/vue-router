<template>
  <div id="app">
    <h3>這個是全局變量：{{ $store.state.num }}</h3>
    <h3>當前的登入用戶是：{{ $store.getters.getLoginUserName }}</h3>
    <input type="button" value="點我 num +1" @click="addVuexNum" />
    &nbsp;
    <input type="button" value="點我 num -1" @click="minusVuexNum" />
    <hr />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about" tag="button">About</router-link> |
      <router-link to="/login">登錄頁面</router-link> |
      <router-link :to="UserUrl">User</router-link>
    </div>
    <hr />
    <input
      type="button"
      value="跳轉到使用者頁面 Leo"
      @click="
        $router.push('/User/Leo').catch(err => {
          err;
        })
      "
    />
    <input
      type="button"
      value="跳轉到使用者頁面 myoacg"
      @click="
        $router.push({ name: 'User', params: { id: 'myoacg' } }).catch(err => {
          err;
        })
      "
    />
    <input
      type="button"
      value="跳轉到使用者頁面 myoacg2"
      @click="
        $router.push({ name: 'User', params: { id: 'myoacg2' } }).catch(err => {
          err;
        })
      "
    />
    <input
      type="button"
      value="商品目錄 ss001"
      @click="
        $router
          .push({ name: 'Product', params: { id: 'ss001' } })
          .catch(err => {
            err;
          })
      "
    />
    <input
      type="button"
      value="跳轉到使用者頁面避免重複 demo"
      @click="navToDemo('demo')"
    />
    <input type="button" value="跳轉到用戶的首頁 home" @click="navToHome" />
    <input type="button" value="回到上一頁" @click="backPage" />
    <hr />
    <transition name="rv-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      UserUrl: "/user/waha1206"
    };
  },
  methods: {
    addVuexNum() {
      this.$store.commit("addNum", 1);
    },
    minusVuexNum() {
      this.$store.commit("addNum", -1);
    },
    navToDemo(id) {
      // console.log("id", id);
      const path = `/User/${id}`;
      // console.log("path", path);
      // console.log("$route.path", this.$route.path);
      // if (this.$route.path != path)
      this.$router.push(`${path}`).catch(err => {
        err;
      });
    },
    navToHome() {
      console.log(this.$route);
      this.$router.push("home").catch(() => {
        console.log("重複的點擊頁面");
      });
    },
    backPage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.router-link-exact-active {
  background-color: pink;
}

.rv-fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.rv-fade-enter-active {
  transition: all 1s ease;
}
.rv-fade-enter-to {
  opacity: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
