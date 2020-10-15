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
      <button @click="modifiyReactVar">修改数值-React</button>
      <p>{{ shareVarReact }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      shareVarReact: 0
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
      this.shareVarReact = state.num;
    });
  },
  methods: {
    modifiyVar() {
      this.$store.commit("modifiy", 2001);
    },
    modifiyReactVar() {
      this.$qiankunActions.setGlobalState({ num: 3000 });
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
