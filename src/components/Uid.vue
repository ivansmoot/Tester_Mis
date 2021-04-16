<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入手机号"
      maxlength="11"
      clearable
      style="width: 200px"
    />
    <el-button
      type="primary"
      round
      style="margin: 20px"
      @click="query_uid"
    >
      确定
    </el-button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
import { test } from '../requests/get'
import axioses from '../utils/axios'

export default defineComponent({
    setup(){
      let input = ref('')
      function query_uid() {
        test()
      }
      return { input, query_uid }
    }
})
</script>

<style scoped>
</style>