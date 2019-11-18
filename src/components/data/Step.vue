<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据</el-breadcrumb-item>
      <el-breadcrumb-item>步骤条</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-alert title="添加商品信息" type="info" show-icon center :closable="false"></el-alert>

      <el-steps :active="stepActive - 0" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="物流信息"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <el-form
        :model="goodForm"
        :rules="goodRules"
        ref="FormRef"
        label-width="100px"
        label-position="top"
      >
        <el-tabs v-model="tabActive" tab-position="left" :before-leave="beforeTagLeave">
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="goodForm.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
              <el-input v-model.number="goodForm.price" clearable></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="type">
              <el-cascader
                clearable
                v-model="goodForm.type"
                :options="goodsTypes"
                :props="{ expandTrigger: 'hover',children:'children',value:'value',lable:'lable' }"
                @change="cascaderHandleChange"
              ></el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">
            <el-form-item :label="item.name" v-for="item in goodsParams" :key="item.id">
              <el-checkbox-group v-model="checkedDesignList" @change="checkGroupChange">
                <el-checkbox
                  :label="design.name"
                  v-for="design in item.children"
                  :key="design.id"
                  border
                  :checked="true"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="物流信息" name="2">
            <el-timeline>
              <el-timeline-item
                v-for="(item, index) in distributions"
                :key="index"
                :timestamp="item.timestamp"
                :icon="item.icon"
                :color="item.color"
                size="large"
              >{{item.msg}}</el-timeline-item>
            </el-timeline>
          </el-tab-pane>
          <el-tab-pane label="商品图片" name="3">
            <el-upload
              ref="UploadRef"
              multiple
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handlePictureCardRemove"
            >
              <i class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="商品内容" name="4">
            <quill-editor v-model="goodContent"></quill-editor>
            <el-button type="primary" class="addbtn" @click="addGood">添加商品</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>

    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepActive: 0,
      tabActive: '0',
      goodForm: {
        name: '',
        price: '',
        type: ''
      },
      goodRules: {
        name: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }
        ],
        price: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          },
          {
            type: 'number',
            message: '商品价格必须为数字'
          }
        ]
      },
      goodsTypes: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      goodsParams: [
        {
          id: 1,
          name: '款式',
          children: [
            {
              id: 11,
              name: '21寸液晶'
            },
            {
              id: 12,
              name: '超大显示屏'
            },
            {
              id: 13,
              name: '迷你家用型'
            }
          ]
        },
        {
          id: 2,
          name: '颜色',
          children: [
            {
              id: 21,
              name: '黑色'
            },
            {
              id: 22,
              name: '白色'
            }
          ]
        }
      ],
      checkedDesignList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      goodContent: '',
      distributions: [
        {
          timestamp: '2019-11-18',
          msg: '快递已经签收 签收人:海先生',
          icon: 'el-icon-s-flag',
          color: '#00cc00'
        },
        {
          timestamp: '2019-11-16',
          msg: '快递到达银川，由快递员王师傅负责',
          icon: 'el-icon-caret-top',
          color: ''
        },
        {
          timestamp: '2019-11-16',
          msg: '快递到达西安，准备去往下一站',
          icon: 'el-icon-caret-top',
          color: ''
        },
        {
          timestamp: '2019-11-14',
          msg: '快递装箱完毕，已经出发',
          icon: 'el-icon-position',
          color: '#80dfff'
        }
      ]
    }
  },
  methods: {
    cascaderHandleChange() {
      console.log(this.goodForm.type)
    },
    beforeTagLeave(activeName, oldActiveName) {
      console.log(this.goodForm.type)
      if (oldActiveName === '0' && !this.goodForm.type) {
        this.$message.error('请选择商品类型')
        return false
      }
      this.stepActive = activeName
    },
    checkGroupChange() {
      console.log(this.checkedDesignList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handlePictureCardRemove(file, fileList) {
      console.log(file, fileList)
    },
    addGood() {
      this.$notify({
        title: '商品添加成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
      this.stepActive = 6
      //   this.$refs.FormRef.resetFields()
      //   this.goodContent = ''
      //   this.goodForm.type = ''
      //   this.$refs.UploadRef.clearFiles()
      //   this.stepActive = 0;
      //   this.tabActive = '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-steps {
  margin: 30px 0px !important;
}
.el-checkbox {
  margin: 0 15px 0 0;
}
.addbtn {
  margin-top: 15px;
}
.el-timeline {
  margin-top: 15px;
}
</style>
