import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { IBaseData, ISystemInfo } from './base'

const baseStoreModule = defineStore('base', () => {
  const baseData: IBaseData = reactive({
    systemInfo: {} as ISystemInfo
  })

  const getSystemInfo = () => {
    return baseData.systemInfo
  }

  const setSystemInfo = (obj: ISystemInfo) => {
    baseData.systemInfo = obj
  }

  return {
    ...toRefs(baseData),
    getSystemInfo,
    setSystemInfo
  }
})

export default baseStoreModule
