<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        :default-active="$route.path"
        :unique-opened="true"
        :router="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-submenu index="/basic">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>基础Basic</span>
          </template>
          <el-menu-item index="/basic/layout">布局</el-menu-item>
          <el-menu-item index="/basic/container">布局容器</el-menu-item>
        </el-submenu>
        <el-submenu index="form">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>表单Form</span>
          </template>
          <el-menu-item index="/form/radio">单选框</el-menu-item>
          <el-menu-item index="/form/checkbox">多选框</el-menu-item>
        </el-submenu>
        <el-submenu index="data">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据Data</span>
          </template>
          <el-menu-item index="/data/table">表格</el-menu-item>
          <el-menu-item index="/data/tag">标签</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang='scss'>
.el-menu-vertical-demo {
  width: 200px;
  height: 100%;
  position: fixed;
}
</style>
