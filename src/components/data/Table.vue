<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据</el-breadcrumb-item>
      <el-breadcrumb-item>表格</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-row :gutter="50">
        <el-col :span="7">
          <el-input v-model="query" placeholder="请输入内容" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addUserDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>

      <el-table :data="userList" style="width: 100%" border stripe>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="状态" width="100">
          <template v-slot="table">
            <el-switch
              v-model="table.row.status"
              @change="statusChange(table.row)"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="280">
          <template v-slot="table">
            <el-tooltip effect="dark" content="edit" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="share" placement="top" :enterable="false">
              <el-button type="info" icon="el-icon-share" size="small"></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="delete" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>

    <el-dialog
      title="添加用户"
      :visible.sync="addUserDialogVisible"
      width="30%"
      @close="addUserDialogClose"
    >
      <el-form
        :model="addUserForm"
        :rules="addUserFormRules"
        ref="addUserFormRef"
        label-width="70px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addUserForm.username"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="addUserForm.address"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addUserForm.email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      const regEmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
      if (regEmail.test(value)) {
        return callback()
      }
      callback(new Error('请输入合法的邮箱'))
    }
    return {
      query: '',
      userList: [],
      pageNum: 1,
      pageSize: 3,
      total: 4,
      addUserDialogVisible: false,
      addUserForm: {
        username: '',
        address: '',
        email: ''
      },
      addUserFormRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        address: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        email: [{ validator: checkEmail, trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      const resFromAxios = [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status: false
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          status: true
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          status: false
        }
      ]

      this.userList = resFromAxios.slice(0, this.pageSize)
    },
    handleSizeChange(newSize) {
      this.pageSize = newSize
      this.getUserList()
    },
    handleCurrentChange(changeNum) {
      this.pageNum = changeNum
      this.getUserList()
    },
    statusChange(userInfo) {
      console.log('status:' + userInfo.status)
    },
    addUserDialogClose() {
      this.$refs.addUserFormRef.resetFields()
    },
    addUser() {
      this.$refs.addUserFormRef.validate(valid => {
        if (!valid) return this.$message.error('valid ' + valid)
        this.$message.success('addUser success')
        this.addUserDialogVisible = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
