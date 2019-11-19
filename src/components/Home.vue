<template>
  <el-container class="home-container">
    <!-- header -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt />
        <span>Vue&前端 练习</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="toggle-btn" @click="toggleCollapse">|||</div>
        <el-menu
          :default-active="activePath"
          :collapse="isCollapse"
          router
          :collapse-transition="false"
          unique-opened
          background-color="#304156"
          text-color="#fff"
          active-text-color="#0068ff"
        >
          <el-submenu :index="item.path+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{item.menuName}}</span>
            </template>
            <el-menu-item
              :index="subItem.path+''"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveActivePath(subItem.path)"
            >
              <i class="el-icon-menu"></i>
              {{subItem.menuName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      iconObj: {
        '1': 'el-icon-s-shop',
        '2': 'el-icon-s-opportunity',
        '3': 'el-icon-eleme'
      },
      isCollapse: false,
      activePath: ''
    }
  },
  created() {
    this.getMenuList()
    this.setActivePathBySessionStorage()
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    getMenuList() {
      const resFromAxois = [
        {
          id: 1,
          menuName: '基础',
          path: '/basic',
          children: [{ id: 11, menuName: '布局', path: '/layout' }, { id: 12, menuName: '容器', path: '/container' }]
        },
        {
          id: 2,
          menuName: 'Vue',
          path: '/data',
          children: [
            { id: 21, menuName: 'table', path: '/table' },
            { id: 22, menuName: 'tag', path: '/tag' },
            { id: 23, menuName: 'step', path: '/step' },
            { id: 24, menuName: 'chart', path: '/chart' },
            { id: 25, menuName: 'icon', path: '/icon' }
          ]
        }
      ]
      this.menuList = resFromAxois
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveActivePath(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
    setActivePathBySessionStorage() {
      this.activePath = window.sessionStorage.getItem('activePath')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #424141;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #eef3f8;
  font-size: 20px;

  div {
    display: flex;
    align-items: center;

    img {
      height: 100%;
      width: 20%;
    }

    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #304156;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #e9eef3;
}

.toggle-btn {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
