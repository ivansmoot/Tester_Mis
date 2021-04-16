import axioses from '../utils/axios'

/**
 * 这个文件里放所有的get请求
 * 原则是所有请求都放在统一的文件里,用方法暴露出去
 * 外部使用的时候直接使用方法,不直接调接口
 */

export function test(){
  axioses.get('/test1')
  console.log('function test')
}
