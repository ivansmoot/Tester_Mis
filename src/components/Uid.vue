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
  <div>
    <p>
      uid: {{ uid_code }}
    </p>
  </div>
</template>
   
<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
import { phone2uid } from '../requests/get'
import axioses from '../requests/axios'

export default defineComponent({
    setup(){
      let input = ref('')
      let uid_code = ref('')
      function query_uid() {
        // get请求的方法都写在get.ts里面里,直接调用就好
        phone2uid(input.value)
          .then(function(response){
            // 这个函数返回一个promise,通过.then的形式接收
            uid_code.value = response
          })
      }
      return { input, query_uid, uid_code }
    }
})
</script>

<style scoped>
</style>