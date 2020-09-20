<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>首頁</h1>
    <div class="left">
      <router-view></router-view>
    </div>
    <div class="right">
      <router-view name="right"></router-view>
    </div>
    <div class="foot">
      <router-view name="foot"></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.left {
  float: left;
  width: 200px;
  background-color: #098;
  height: 300px;
}
.foot {
  clear: both;
  height: 100px;
  background-color: blue;
}

.right {
  // margin-left: 202px;
  background-color: #cc0;
}
</style>
