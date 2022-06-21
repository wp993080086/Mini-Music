import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { IUserInfoModule, IuserInfo } from './user-info'

const userInfoStoreModule = defineStore('userInfo', () => {
  const userInfoData: IUserInfoModule = reactive({
    cookie: '',
    token: '',
    userInfo: {} as IuserInfo
  })
  // 获取用户信息
  const getUserCookie = () => {
    return userInfoData.cookie
  }
  const getUserToken = () => {
    return userInfoData.token
  }
  const getUserInfo = () => {
    return userInfoData.userInfo
  }
  // 设置用户信息
  const setUserCookie = (cokie: string) => {
    userInfoData.cookie = cokie
  }
  const setUserToken = (token: string) => {
    userInfoData.token = token
  }
  const setUserInfo = (obj: IuserInfo) => {
    userInfoData.userInfo = obj
  }

  return {
    ...toRefs(userInfoData),
    getUserCookie,
    getUserToken,
    getUserInfo,
    setUserCookie,
    setUserToken,
    setUserInfo
  }
})

export default userInfoStoreModule
