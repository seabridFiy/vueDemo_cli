import localStorage from 'localStorage'

//获取localstorage存储项
export const get_ls_item = (key) => {
  localStorage.getItem(key)
}
//设置localstorage存储项
export const set_ls_item = (key,value) => {
  localStorage.setItem(key,value)
}
//删除localstorage存储项
export const remove_ls_item = (key) => {
  localStorage.removeItem(key)
}
//清空localstorage存储
export const clear_ls = () => {
  localStorage.clear
}