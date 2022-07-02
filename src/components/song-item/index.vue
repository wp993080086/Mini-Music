<script lang="ts" setup>
import { navigateTo } from '@/utils'
import { INewSongListItem } from '@/pages/home/home'

interface Props {
  songInfo: INewSongListItem
}

const props = withDefaults(defineProps<Props>(), {
  songInfo: () => ({} as INewSongListItem)
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
        <u-image :src="props.songInfo.picUrl + '?param=50y50'" height="100%">
          <template #error>
            <view>加载失败</view>
          </template>
        </u-image>
      </view>
    </view>
    <view class="song_item_r">
      <view class="song_item_r_text">
        <view class="text_title">{{ props.songInfo.name }}</view>
        <view class="text_txt">{{
          props.songInfo.song.alias.join('、') || props.songInfo.song.artists[0].name
        }}</view>
      </view>
      <view class="song_item_r_icon">
        <u-icon name="arrow-right" color="#606266" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.song_item_box {
  background-color: $bg;
  @include flex_c();
  justify-content: space-between;
  @include set_w_h(fill, 120);
  .song_item_l {
    @include set_w_h(120, fill);
    padding: 10rpx 20rpx 10rpx 0rpx;
    .song_cover {
      @include set_w_h();
      border-radius: 16rpx;
      overflow: hidden;
    }
  }
  .song_item_r {
    display: flex;
    width: calc(100% - 120rpx);
    height: 100%;
    .song_item_r_text {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: calc(100% - 60rpx);
      height: 100%;
      .text_title {
        font-size: 30rpx;
        font-weight: bold;
        line-height: 60rpx;
        @include omit();
      }
      .text_txt {
        font-size: 24rpx;
        line-height: 40rpx;
        @include omit();
      }
    }
    .song_item_r_icon {
      @include flex_c();
      @include set_w_h(60, fill);
    }
  }
}
</style>
