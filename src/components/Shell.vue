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
    <img src="Logo.png" style="height: 50px; width: 50px; margin-left: 40px" @click="go_home"/>
  </div>
  <div style="margin-left: 200px;">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  setup(){
    const router = useRouter()
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