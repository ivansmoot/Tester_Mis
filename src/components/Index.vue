<template>
  <!-- 通用导航栏 -->
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <!-- 左边的logo -->
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="Logo.png" style="height: 30px; width: 30px;"/>
      </a>
      <!-- 中间的那几个按钮 -->
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
      </ul>
      <!-- 右边的登陆注册按钮 -->
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2" @click="centerDialogVisible = true">Logout</button>
        <el-dialog
          title="提示"
          v-model="centerDialogVisible"
          width="30%"
          center>
          <span>确认退出吗？</span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="logout">确 定</el-button>
            </span>
          </template>
        </el-dialog>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>

  <!-- 左侧的选项,也是通用在每个页面的,除了登陆页不方便看到这个,所以有个v-show用于隐藏该div, -->
  <!-- hidden_left_bar被定义在router.ts里,之所以用是否「隐藏」而不是「展示」, -->
  <!-- 是因为undefined默认是false,不这么写的话,所有的router里面都要写这个字段,就很烦 -->
  <div style="float: left" v-show="!$route.meta.hidden_left_bar">
    <el-menu class="el-menu-vertical-demo" router>
      <el-menu-item index="package">
        <i class="el-icon-goods"></i>
        <template #title>打包</template>
      </el-menu-item>
      <el-menu-item index="uid">
        <i class="el-icon-user"></i>
        <template #title>UID查询</template>
      </el-menu-item>
      <el-menu-item index="verification">
        <i class="el-icon-chat-square"></i>
        <template #title>验证码</template>
      </el-menu-item>
    </el-menu>
  </div>

  <!-- 路由页面的div都会放在这里,登陆页由于没有左边栏,需要单独设置style,不然会很丑 -->
  <div style="float: left; margin-left: 30px;">
    <router-view/>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import router from '../router/router'

export default defineComponent({
  setup(){
    const centerDialogVisible = ref(false)
    function logout() {
      centerDialogVisible.value = false
      localStorage.removeItem('loginToken')
      router.push('/')
    }
    return { centerDialogVisible, logout }
  }
})
</script>

<style scoped>
</style>