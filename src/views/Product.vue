<template>
  <div>
    <h1>商品頁面編號:{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["id"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
