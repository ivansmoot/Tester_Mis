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


// 通过手机号查询uid的方法,做了一些参数的过滤
// 函数通过promise的方式返回一个string
export async function phone2uid(phone_num: String): Promise<string> {
  let res = ''
  // 必须是11位的数字才行
  if ((phone_num.length == 11) && !isNaN(Number(phone_num))){
    await axioses({
      method: 'get',
      url: `/phone2uid/${phone_num}`
    }).then(function (response) {
      res = response.data
    })
  } else {
    ElMessage({
      showClose: true,
      message: '请输入正确的手机号',
      type: 'error'
    })
    res = 'error'
  }
  return res
}