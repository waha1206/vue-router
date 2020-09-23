<template>
  <div>
    <h1>這個是Login頁面</h1>
    <input type="button" value="點擊登錄" @click="clickLogin" />
    &nbsp;
    <input
      type="button"
      value="mapMutations點擊登錄"
      @click="userLogin({ UserName: 'Leo' })"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    clickLogin() {
      this.$store.commit("userLogin", { UserName: "waha1206" });
    },
    ...mapMutations(["userLogin"])
  }
};
</script>

<style lang="scss" scoped></style>
