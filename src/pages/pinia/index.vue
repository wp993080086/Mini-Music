<script setup lang="ts">
import { ref, computed } from 'vue'
import { userInfoStoreModule } from '@/store/index'

const textColor = ref('red')
const userStore = userInfoStoreModule()
const userInfo = computed(() => {
  return userStore.getUserInfo().nickname
})
</script>

<template>
  <view class="pinia_box">
    <p>{{ userInfo }}</p>
  </view>
</template>

<style scoped lang="scss">
.pinia_box {
  @include flex_c;
  color: v-bind('textColor');
}
</style>
