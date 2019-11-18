<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据</el-breadcrumb-item>
      <el-breadcrumb-item>标签</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-table :data="userList" style="width:100%" border stripe>
        <el-table-column type="expand" width="50">
          <template v-slot="scope">
            <el-row
              :class="['bdbottom',index===0?'bdtop':'','vcenter']"
              v-for="(item1,index) in scope.row.children"
              :key="item1.id"
            >
              <el-col :span="5">
                <el-tag>{{item1.name}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                <el-row
                  :class="[index2===0?'':'bdtop','vcenter']"
                  v-for="(item2,index2) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag type="success">{{item2.name}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      type="warning"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                    >{{item3.name}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index" width="100"></el-table-column>
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>
        <el-table-column prop="right" label="角色" width="200">
          <template v-slot="scope">
            <el-tag type="danger" v-if="scope.row.right === '1'">超级管理员</el-tag>
            <el-tag type="success" v-else-if="scope.row.right === '2'">管理员</el-tag>
            <el-tag type="info" v-else>普通用户</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="right" label="树形控件" width="250">
          <template v-slot="scope">
            <el-tree
              @check="handleNodeChange"
              :data="scope.row.children"
              :props="treeProps"
              show-checkbox
              node-key="id"
              :default-expand-all="true"
              :default-checked-keys="defaultKeys"
              ref="treeRef"
            ></el-tree>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [],
      defaultKeys: [],
      treeProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created() {
    this.getUserList()
    this.getLeafKeys(this.userList[0], this.defaultKeys)
    // this.defaultKeys = userList.children
  },
  mounted() {
    // this.handleNodeChange()
  },
  methods: {
    getUserList() {
      const resFromAxios = [
        {
          name: '王小虎',
          right: '1',
          children: [
            {
              id: '11',
              name: '11',
              children: [
                {
                  id: '111',
                  name: '111',
                  children: [
                    {
                      id: '1111',
                      name: '1111'
                    },
                    {
                      id: '1112',
                      name: '1112'
                    },
                    {
                      id: '1113',
                      name: '1113'
                    }
                  ]
                },
                {
                  id: '222',
                  name: '222',
                  children: [
                    {
                      id: '2221',
                      name: '2221'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '王aa',
          right: '2',
          children: []
        },
        {
          name: 'ff',
          right: '3',
          children: []
        },
        {
          name: 'sss',
          right: '2',
          children: []
        }
      ]

      this.userList = resFromAxios
    },
    // 递归获取叶子节点
    getLeafKeys(node, arr) {
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach(element => {
        this.getLeafKeys(element, arr)
      })
    },
    handleNodeChange() {
      // console.log(this.$refs.treeRef.getCheckedKeys(true))
      // const changedRights = [
      //   ...this.$refs.treeRef.getCheckedKeys(),
      //   ...this.$refs.treeRef.getHalfCheckedKeys()
      // ]
      // console.log(changedRights)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 0px;
}
.el-tag {
  margin: 7px;
}

.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>
