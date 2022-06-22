<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getSystemInfo } from '@/utils'
import { baseStoreModule } from '@/store'
import { ISystemInfo } from '@/store/modules/base/base'

onLaunch(async () => {
  const baseStore = baseStoreModule()
  const res = await getSystemInfo()
  baseStore.setSystemInfo(res as ISystemInfo)
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'vk-uview-ui/index.scss';
@import '../src/static/styles/normalize.css';
</style>
