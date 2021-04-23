import axioses from './axios'
import FormData from 'form-data'
import { ElMessage } from 'element-plus'
import router from '../router/router'

/**
 * 这个文件里放所有的post请求
 * 原则是所有请求都放在统一的文件里,用方法暴露出去
 * 外部使用的时候直接使用方法,不直接调接口
 */


// 登陆的网络请求方法,拿到用户填的账号密码后,请求token接口,期望拿到相应的token值
// 如果没有返回token值,则出错,拿到了就存在本地
export async function login(account: String, psw: String){
  
  const formData = new FormData()
  formData.append('username', account)
  formData.append('password', psw)

  await axioses.post('/token', formData)
  .then(function (response) {
    if (response?.data?.error == 'wrong account/password') {
      ElMessage({
        showClose: true,
        message: '账号/密码错误',
        type: 'error'
      })
    } else if (response) {
      localStorage.setItem('loginToken', response.data.access_token)
      router.push('/welcome')
    } else {
      ElMessage({
        showClose: true,
        message: '出错了',
        type: 'error'
      })
    }
  })

}