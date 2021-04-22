import axios, { AxiosRequestConfig, AxiosResponse} from 'axios'
import { ElMessage } from 'element-plus'
import qs from 'qs'

/**
 * 这个文件负责全局设置网络请求相关的内容
 * 即axios的配置,对部分逻辑进行统一处理
 */

const pending = new Map()

/**
 * 下面的addPending、removePending、clearPending方法
 * 都是用于对pending住的请求做处理
 * 因为在一些情况下需要取消掉未处理完毕的请求
 */
const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data)
  ].join('&')
  config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
    if (!pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
      pending.set(url, cancel)
    }
  })
}

const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data)
  ].join('&')
  if (pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url)
    cancel(url)
    pending.delete(url)
  }
}
 
export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url)
  }
  pending.clear()
}


// 设置baseURL和timeout的时间
const axioses = axios.create({
  baseURL: 'http://192.168.10.122:6778',
  timeout: 5000
})


/**
 * 在请求发起前的一些处理
 * 如果该请求已经在pending了,先取消,再重新请求
 */
axioses.interceptors.request.use((config: AxiosRequestConfig) => {
  removePending(config) // 在请求开始前，对之前的请求做检查取消操作
  addPending(config) // 将当前请求添加到 pending 中
  // 拿到本地存储的token值
  let token = localStorage.getItem('loginToken')
  // 如果有token,就在header里带上这个token值
  if(token){
    config.headers['Authorization'] = 'Bearer ' + token
    console.log('已有token' + config.headers.Authorization)
  }
  return config
}, error => {
  ElMessage({
    showClose: true,
    message: error,
    type: 'error'
  })
})

/**
 * 请求完毕后的一些处理
 * 如果请求出错了,弹出错误码提示
 */
axioses.interceptors.response.use(response => {
  removePending(response)
  return response
}, error => {
    if(error.response && error.response.status){
      let errorMessage = `出错了, 错误码: ${error.response.status}`
      ElMessage({
        showClose: true,
        message: errorMessage,
        type: 'error'
      })
    }
  }
)

export default axioses