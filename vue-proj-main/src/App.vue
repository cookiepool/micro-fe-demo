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
import Menu from "./layout/Menu";

export default {
  name: "App",
  components: {
    "menu-item": Menu
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
div,
p {
  margin: 0;
  padding: 0;
}

.layout-container {
  .content-box {
    margin-left: 210px;
    height: 100vh;
  }
}
</style>
