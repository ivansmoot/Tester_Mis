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
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit" @click="signIn">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup(){
    const router = useRouter()
    // 登陆按钮点击事件
    // TODO
    const signIn = (() => {
      console.log('click signin !')
      router.push('/welcome')
    })
    return { signIn }
  }
})
</script>

<style scoped>
</style>