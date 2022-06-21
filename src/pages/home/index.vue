<script setup lang="ts">
import { reactive } from 'vue'
</script>

<template>
  <view class="home_box">
    <view class="search_box">
      <view class="search_main">
        <text class="search_text">搜索</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '@/static/styles/common-color.scss';
.home_box {
  width: 100%;
  height: 100%;
  .search_box {
    width: 100%;
    padding: 20rpx 32rpx;
    .search_main {
      @include center();
      width: 100%;
      height: 60rpx;
      background-color: $white;
      border-radius: 30rpx;
      .search_text {
        color: $text4;
      }
    }
  }
}
</style>
