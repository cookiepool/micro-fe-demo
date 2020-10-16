<template>
  <div class="home-wraper">
    <h1>主页</h1>
    <hr />
    <div class="test-share">
      <button @click="modifiyVar">修改数值-Vue</button>
      <p>{{ shareVar }}</p>
    </div>
    <hr />
    <div class="test-share">
      <button @click="modifiyReactVar">修改数值</button>
      <p>修改过后的值-传递给子应用：{{ shareCurVarReact }}</p>
      <p>来自子应用react的值：{{ shareVarReact }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      shareVarReact: 0,
      shareCurVarReact: 0
    };
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

    // 注册一个观察函数
    this.$qiankunActions.onGlobalStateChange((state, prev) => {
      console.log(state, prev);

      this.shareVarReact = prev.num;
      this.shareCurVarReact = state.num;
    }, true);
  },
  methods: {
    modifiyVar() {
      this.$store.commit("modifiy", 2001);
    },
    modifiyReactVar() {
      let num = this.shareCurVarReact;
      this.$qiankunActions.setGlobalState({ num: ++num });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-wraper {
  text-align: center;
  .test-share {
    button {
      width: 130px;
      height: 45px;
    }
    p {
      font-size: 24px;
      margin-top: 24px;
    }
  }
}
</style>
