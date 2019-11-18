<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar-box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form :model="form" :rules="rules" ref="loginFormRef" label-width="0px" class="login-form">
        <el-form-item prop="name">
          <el-input v-model="form.name" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" prefix-icon="el-icon-search" show-password></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          // this.$http.post("login",this.form);
          window.sessionStorage.setItem('token', 'xxxxsadsdsfdd')
          this.$router.push('/home')
          this.$message.success('success')
        } else {
          this.$message.error('error')
          return false
        }
      })
    },
    reset() {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b4b6b;
  height: 100%;

  .login-box {
    position: relative;
    height: 300px;
    width: 450px;
    background-color: white;
    border-radius: 3px;

    .avatar-box {
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ddd;

      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: grey;
      }
    }

    .login-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;

      .btns {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
