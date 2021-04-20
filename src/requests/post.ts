import axioses from './axios'
import FormData from 'form-data'
import { ElMessage } from 'element-plus'

/**
 * 这个文件里放所有的post请求
 * 原则是所有请求都放在统一的文件里,用方法暴露出去
 * 外部使用的时候直接使用方法,不直接调接口
 */

export async function login(account: String, psw: String): Promise<boolean>{
  let loginStatus: boolean = false
  const formData = new FormData()
  formData.append('username', account)
  formData.append('password', psw)

  await axioses.post('/token', formData)
    .then(function (response) {
      if (response) {
        console.log('登陆成功了')
        loginStatus = true
      } else {
        console.log('登陆失败了')
        loginStatus = false
        ElMessage({
          showClose: true,
          message: '账号/密码错误',
          type: 'error'
        })
      }
    })
  
  return loginStatus
}