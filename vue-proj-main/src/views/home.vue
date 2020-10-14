<template>
  <div class="home-wraper">
    <h1>主页</h1>
    <hr />
    <div class="test-share">
      <button @click="modifiyVar">修改数值</button>
      <p>{{ shareVar }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    shareVar() {
      return this.$store.state.testVar;
    }
  },
  mounted() {
    // 测试全局变量污染
    window.a = 100;
    console.log("main-app", window.a);
  },
  methods: {
    modifiyVar() {
      this.$store.commit("modifiy", 2001);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-wraper {
  text-align: center;
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

}
</style>
