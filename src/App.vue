<template>
  <div id="app">
    <el-container>
      <nav-menu :isCollapse="fixedHeader"></nav-menu>
      <el-container class="header-main">
        <Header></Header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
export default {
  name: "app",
  data() {
    return {
      isCollapse: false,
      fixedHeader: false
    };
  },
  // computed: {
  //   fixedHeader() {
  //     return this.isCollapse;
  //   }
  // },
  components: {
    NavMenu,
    Header
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app,
.el-container {
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.header-main {
  margin-left: 200px;
}
</style>
