import axios from 'axios'

//axios 通用配置
let config = {
  baseURL: 'https://www.easy-mock.com/mock/5a3e1d0c3abd5873d2469605/test',
  timeout: 10000
}
const instance = axios.create(config)
// 请求开始加入loading
instance.interceptors.request.use(config => {
  if (/^http/.test(config.url) || /^\/wh-manager/.test(config.url)) config.baseURL = ''
  config.headers.userInfo = sessionStorage.userInfo || ''
  return config
}, error => {
  return Promise.reject(error)
})
export default instance