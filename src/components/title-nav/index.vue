<script lang="ts" setup>
import { navigateTo } from '@/utils'

interface Props {
  title: string
  path: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  path: ''
})
// 去详情
const toDetails = (path: string) => {
  navigateTo(path)
}
</script>

<template>
  <view class="title_nav_box">
    <view class="title_text">{{ props.title }}</view>
    <view class="title_icon" @click="toDetails">
      <text class="all_text">更多</text>
      <u-icon name="arrow-right" color="#606266" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.title_nav_box {
  background-color: $bg;
  @include flex_c();
  justify-content: space-between;
  @include set_w_h(fill, 80);
  padding: 0rpx 32rpx;
  .title_text {
    color: $text2;
    font-weight: bold;
    font-size: 28rpx;
  }
  .title_icon {
    display: flex;
    align-items: center;
    @include set_w_h(120, fill);
    .all_text {
      margin-right: 10rpx;
      color: $text2;
    }
  }
}
</style>
