<template>
  <div class="menu-container">
    <el-menu
      :default-active="$route.path"
      background-color="#304156"
      text-color="#fff"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <span slot="title">应用列表</span>
        </template>
        <el-menu-item index="/app-main">主应用</el-menu-item>
        <el-menu-item index="/show-msg">主应用-显示消息</el-menu-item>
        <el-menu-item index="/vue-proj-child/">微应用Vue</el-menu-item>
        <el-menu-item index="1-3">微应用React</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 210px;
  height: 100vh;
  overflow: hidden;
  background-color: #304156;
}
</style>
