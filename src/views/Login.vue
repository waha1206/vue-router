<template>
  <div>
    <h1>這個是Login頁面</h1>
    <input type="button" value="點擊登錄" @click="clickLogin" />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    clickLogin() {
      this.$store.commit("userLogin", { UserName: "waha1206" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
