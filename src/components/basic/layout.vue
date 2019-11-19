<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基础</el-breadcrumb-item>
      <el-breadcrumb-item>布局</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-alert title="css样式学习" type="info" center show-icon :closable="false"></el-alert>
      <div class="container">
        <img src="../../assets/demo.jpg" alt />
        <div class="item">这是一段居中的文字</div>
        <div class="item2">
          右浮动
          <div class="rel">相对定位</div>
          <div class="abs">绝对定位</div>
        </div>
      </div>
      <el-alert title="flex布局学习" type="info" center show-icon :closable="false"></el-alert>
      <div class="flex-base-container flex-container1">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
      </div>
      <div class="flex-base-container flex-container2">
        <div class="column">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
        </div>
        <div class="column">
          <div class="flex-item">3</div>
          <div class="flex-item">4</div>
        </div>
      </div>
      <div class="flex-base-container flex-container3">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  height: 300px;
  margin: 20px;
  border: 10px solid #8ab8df;
  padding: 10px;
  // background: #9c6262 url(../../assets/demo.png) no-repeat;
  // box-sizing: content-box; 默认 该模式下给定的宽度不包括margin,border,padding
  // box-sizing: border-box; 默认 该模式下给定的宽度margin,border,padding
  img {
    width: 100px;
    height: 100px;
    margin-left: 50px;
    border: 1px solid #1c87e4;
    border-radius: 50%;
    float: left;
  }
  .item {
    width: 200px;
    height: 100px;
    text-align: center;
    border: 1px solid #1c87e4;
    float: left;
    letter-spacing: 3px;
    font-size: 18px;
    font-weight: 600; //100-700
    //文字居中
    line-height: 100px;
    // 设置div居中
    margin: 0 auto;
    position: relative;
    top: 50%; //偏移
    margin-top: -50px; //元素高度的一半
    left: 30px;
  }
  .item2 {
    width: 200px;
    height: 300px;
    float: right;
    position: relative;
    text-align: center;
    background-color: #f0b4b4;
    .rel {
      width: 100px;
      border: 1px solid #1c87e4;
      position: relative;
      left: 20px;
      top: 20px;
    }
    .abs {
      width: 100px;
      border: 1px solid #1c87e4;
      position: absolute;
      left: 50px;
      //   top: 60px;
      bottom: 10px;
    }
  }
}
.flex-base-container {
  height: 400px;
  width: 400px;
  margin: 0px 70px 20px;
  background-color: #c97474;
  float: left;
  display: flex;
  flex-direction: row; //row | row-reverse | column | column-reverse
}
.flex-container1 {
  flex-wrap: wrap;
  //   align-content: space-between ;//flex-start | flex-end | center | space-between | space-around | stretch;
  justify-content: space-around; //flex-start | flex-end | center | space-between | space-around;
  align-items: center; //flex-start | flex-end | center | baseline | stretch
}
.flex-container2 {
  flex-wrap: wrap;
  align-items: center;
  .column {
    flex-basis: 100%;
    display: flex;
    justify-content: space-around;
  }
}
.flex-container3 {
  justify-content: space-between;
  .flex-item:nth-child(2) {
    align-self: center;
  }
  .flex-item:nth-child(3) {
    align-self: flex-end;
  }
}
.el-alert {
  margin: 20px 0;
}
.flex-item {
  width: 100px;
  height: 100px;
  background-color: #549fe6;
  border: 1px solid #ffffff;
  flex-grow: 0; //flex-grow属性都为1，则它们将等分剩余空间
}
</style>
