<template>
  <!-- 登陆页,需要设置一些居中和宽度的属性 -->
  <div style=
   "margin-left: 0px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 300px"
    class="text-center"
  >
    <main class="form-signin">
      <img src="Logo.png" style="height: 80px; width: 80px;"/>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" v-model="account" placeholder="Account">
        <label for="floatingInput">Account</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" v-model="password" placeholder="Password" @keyup.enter="signIn">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" checked disabled value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit" @click="signIn">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { login } from '../requests/post'
import SHA512 from 'crypto-js/sha512'

export default defineComponent({
  setup(){
    const account = ref()
    const password = ref()
    // 登陆按钮点击事件
    // 直接调用post.ts里的login方法,逻辑基本都在login里处理
    const signIn = (() => {
      // sha512先哈希一下,避免明文传输密码
      const password_hash = SHA512(password.value).toString()
      login(account.value, password_hash)
    })
    return { signIn, account, password }
  }
})
</script>

<style scoped>
</style>