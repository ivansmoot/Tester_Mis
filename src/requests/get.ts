import axioses from './axios'
import { ElMessage } from 'element-plus'

/**
 * 这个文件里放所有的get请求
 * 原则是所有请求都放在统一的文件里,用方法暴露出去
 * 外部使用的时候直接使用方法,不直接调接口
 */

export function test() {
  axioses.get('/test1')
  console.log('function test')
}

export function phone2uid(phone_num: String) {
  // 必须是11位的数字才行
  if ((phone_num.length == 11) && !isNaN(Number(phone_num))){
    axioses.get(`/phone2uid/${phone_num}`)
  } else {
    ElMessage({
      showClose: true,
      message: '请输入正确的手机号',
      type: 'error'
    })
  }
}
