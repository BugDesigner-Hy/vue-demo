<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据</el-breadcrumb-item>
      <el-breadcrumb-item>图表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-row type="flex" justify="center" :gutter="20">
        <el-col :span="11">
          <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
          <div id="chart" style="width: 600px;height:400px;"></div>
        </el-col>
        <el-col :span="11">
          <div id="chart2" style="width: 600px;height:400px;"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {}
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart'))
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 示例1'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)

    var myChart2 = echarts.init(document.getElementById('chart2'))
    var option2 = {
      title: {
        text: 'ECharts 示例2'
      },
      tooltip: {},
      dataset: {
        // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
          { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
          { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
          {
            product: 'Walnut Brownie',
            '2015': 72.4,
            '2016': 53.9,
            '2017': 39.1
          }
        ]
      },
      legend: {},
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    }
    myChart2.setOption(option2)
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 20px;
}
</style>
