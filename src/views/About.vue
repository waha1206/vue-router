<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>這個是全局變量：{{ $store.state.num }}</h3>
    <aboutd @trans="hander"></aboutd>
    <aboutd @trans="hander"></aboutd>
    <aboutd @trans="hander"></aboutd>
    <aboutd @trans="hander"></aboutd>
    <hr />
    <input type="text" v-model="num" />
    &nbsp;
    <input
      type="button"
      value="點擊我使用異步改變 num 數值"
      @click="asyncUpdateNum"
    />
    &nbsp;
    <input
      type="button"
      value="點擊我使用異步改變 num 數值 mapActions"
      @click="updateNumAsync(Number(num))"
    />
  </div>
</template>
<script>
import aboutd from "../components/DeomAbout";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      num: 1
    };
  },
  components: {
    aboutd
  },
  methods: {
    // store 裡面的 action 是透過 dispatch 來分發的
    asyncUpdateNum() {
      this.$store.dispatch("updateNumAsync", Number(this.num));
    },
    hander(e) {
      console.log(e.name);
    },
    // 使用 vuex 的 mapActions 呼叫異步 action 改變數值，少了使用 dispatch 去指派
    ...mapActions(["updateNumAsync"])
  }
};
</script>
