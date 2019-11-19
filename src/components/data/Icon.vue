<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>vue</el-breadcrumb-item>
      <el-breadcrumb-item>图标</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <i class="iconfont iconashbin"></i>
      <i class="iconfont iconagriculture green"></i>
      <i class="iconfont iconcalculator"></i>
      <i class="iconfont iconcamera blue"></i>
      <i class="iconfont iconcart-full"></i>
      <i class="iconfont iconuser"></i>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.iconfont {
  margin-right: 50px;
  font-size: 75px;
}
.green {
  color: green;
}
.blue{
  color: skyblue;
}
</style>