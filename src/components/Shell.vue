<template>
  <div style="float: left">
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
  <div style="margin-left: 200px;">
    <div style="float: left;">
      <router-view/>
    </div>
    <div style="float: right; margin-top: 10px">
      <img src="Logo.png" style="height: 50px; width: 50px;" @click="go_home"/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup(){
    const router = useRouter()

    // 点击爱心图标,路由跳转至home
    const go_home = (() => {
      router.push('/')
    })
    
    return { go_home }
  }
})

</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 800px;
  }
</style>