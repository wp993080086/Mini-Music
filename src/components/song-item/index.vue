<script lang="ts" setup>
import { navigateTo } from '@/utils'

type TSongItem = {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

interface Props {
  songInfo: Array<TSongItem>
}

const props = withDefaults(defineProps<Props>(), {
  songInfo: () => [] as Array<TSongItem>
})
// 去详情
const toDetails = () => {
  navigateTo('')
}
</script>

<template>
  <view class="song_item_box">
    <view class="song_item_l">
      <view class="song_cover">
        <image :src="props.songInfo.picUrl" />
      </view>
    </view>
    <view class="song_item_r">1</view>
    <view class="title_text">{{ props.title }}</view>
    <view class="title_icon" @click="toDetails">
      <text class="all_text">更多</text>
      <u-icon name="arrow-right" color="#606266" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.song_item_box {
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
