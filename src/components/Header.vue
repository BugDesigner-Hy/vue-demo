<template>
  <el-row type="flex" class="el-header">
    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="12" class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-s-custom"></i>
          海洋
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  position: fixed;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  .el-breadcrumb {
    line-height: 60px;
  }
  .user-info {
    margin-left: 900px;
  }
  .el-dropdown {
    height: 100%;
    line-height: 50px;
    .el-dropdown-link {
      width: 100%;
      text-align: right;
      cursor: pointer;
      color: #07121d;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>

