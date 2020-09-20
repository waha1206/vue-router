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
  </div>
</template>
<script>
import aboutd from "../components/DeomAbout";
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
    asyncUpdateNum() {
      this.$store.dispatch("updateNumAsync", Number(this.num));
    },
    hander(e) {
      console.log(e.name);
    }
  }
};
</script>
