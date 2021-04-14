<template>
  <div style="height: 50px; width: 300px">
    <img src="Logo.png" style="height: 50px; width: 50px" @click="go_home"/>
    <el-radio-group v-model="isCollapse" style="position: relative; top: -40%; left: 5%">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
  </div>
  <div style="float: left">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="1"  @click="get_package">
        <i class="el-icon-goods"></i>
        <template #title>打包</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-user"></i>
        <template #title>UID查询</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-chat-square"></i>
        <template #title>验证码</template>
      </el-menu-item>
    </el-menu>
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
    let isCollapse: any = ref(true)
    const router = useRouter()
    function handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
    function handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
    const get_package = (() => {
      router.push('/package')
    })
    const go_home = (() => {
      router.push('/')
    })
    return { isCollapse, handleOpen, handleClose, get_package, go_home }
  }
})

</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 800px;
  }
</style>
