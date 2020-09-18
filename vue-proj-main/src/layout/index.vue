<template>
  <div class="layout-container">
    <menu-item></menu-item>

    <div class="content-box">
      <router-view></router-view>

      <div id="frame"></div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  name: "Layout",
  components: {
    "menu-item": Menu
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  .content-box {
    margin-left: 210px;
    height: 100vh;
  }
}
</style>
