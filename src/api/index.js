/*
包含N个接口请求函数的模块
函数的返回值是promise对象
*/
import ajax from './ajax'

const BASE = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// 2. 获取食品分类列表
export const reqCategorys = () => ajax(BASE + '/index_category')

// 3. 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {latitude, longitude})


// 请求百度的某个接口: /xxx
export const reqBaiduXxx = () => ajax('/baidu/xxx')
