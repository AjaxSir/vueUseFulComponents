import axios from 'axios'
import qs from 'qs'
import store from '../store'
import {Toast} from 'vant'
import Cookis from 'js-cookie'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '/api'

axios.interceptors.request.use(function (config) {
  if (config.url.indexOf('User_Login.Index') === -1 && config.url.indexOf('User_UserRegister.UserReg') === -1) {
    // 如果不是登录且不是注册的时候，就对数据添加签名
    if (config.method === 'get') {
      config.url += config.url.indexOf('?') > -1 ? ('&sign=' + store.getters.sign) : ('?sign=' + store.getters.sign)
    } else {
      config.data.sign = store.getters.sign
    }
  }
  if (config.method !== 'get') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  let res = {}
  if (response.status === 200) {
    if (response.data) {
      let ret = response.data.ret
      if (ret === 200) {
        res.error = false
      } else {
        res.error = true
        res.msg = response.data.msg
        if (ret === 410) {
          if (!Cookis.get('error')) {
            // 避免循环弹出提示框和循环操作，5s内不允许循环弹出
            Cookis.set('error', Date.now(), {expires: Date.now() + 5000})
            Toast('签名过期，稍后请重新登录')
            Cookis.remove('sign')
            Cookis.remove('login')
            Cookis.remove('id')
            Cookis.remove('isbanker')
            Cookis.remove('username')
            Cookis.remove('nickname')
            Cookis.remove('point')
            // 修改store里面的用户信息
            store.dispatch('logout')
          }
        } else if (ret === 500) {
          if (!Cookis.get('error')) {
            // 避免循环弹出提示框和循环操作，5s内不允许循环弹出
            Cookis.set('error', Date.now(), {expires: Date.now() + 5000})
            Toast('服务器遇到了问题')
          }
        }
        // return Promise.reject(res)
      }
      res.result = response.data.data
    }
    return res
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default axios
