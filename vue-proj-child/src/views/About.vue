<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr />
    <div class="test-share">
      <button @click="modifiyVar">修改数值</button>
      <p>{{ shareVar }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      isMicroApp: window.__POWERED_BY_QIANKUN__ ? true : false
    };
  },
  computed: {
    shareVar() {
      return this.isMicroApp ? this.$root.parentVuex.state.testVar : "独立运行";
    }
  },
  mounted() {
    // 测试全局变量污染
    console.log("child-app", window.a);
    window.a = 10000;
  },
  methods: {
    modifiyVar() {
      this.$root.parentVuex.commit("modifiy", 2003);
    }
  }
};
</script>

<style lang="scss" scoped>
.test-share {
  button {
    width: 100px;
    height: 45px;
  }
  p {
    font-size: 24px;
    margin-top: 24px;
  }
}
</style>
