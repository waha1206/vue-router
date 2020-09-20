<template>
  <div class="aboutd">
    <p @click="handlerClick">點擊觸發事件</p>
  </div>
</template>

<script>
export default {
  name: "aboutd",
  data() {
    return {};
  },
  methods: {
    handlerClick() {
      this.$emit("trans", { name: "waha" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
