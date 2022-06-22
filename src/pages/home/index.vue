<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import homeHttp from '@/servers/api/home'
import { baseStoreModule } from '@/store'
import { IBannerItem, ISongListItem, INewSongListItem, IMvListItem, ISingerListItem } from './home'

const baseStore = baseStoreModule()
const homeData = reactive({
  bannerList: [] as Array<IBannerItem>,
  songList: [] as Array<ISongListItem>,
  newSongList: [] as Array<INewSongListItem>,
  mvList: [] as Array<IMvListItem>,
  singerList: [] as Array<ISingerListItem>
})
// 获取Banner
const getBannerList = async () => {
  const osName = baseStore.getSystemInfo().osName
  const param = { type: osName === 'ios' ? 2 : 1 }
  const res = await homeHttp.getBannerList(param)
  homeData.bannerList = res.banners
}
// 获取推荐歌单
const getRecommendSongList = async () => {
  const param = { limit: 10 }
  const res = await homeHttp.getRecommendSongList(param)
  homeData.songList = res.result
}
// 获取推荐新音乐
const getRecommendNewSongList = async () => {
  const param = { limit: 10 }
  const res = await homeHttp.getRecommendNewSongList(param)
  homeData.newSongList = res.result
}
// 获取推荐Mv
const getRecommendMvList = async () => {
  const param = { limit: 10 }
  const res = await homeHttp.getRecommendMvList(param)
  homeData.mvList = res.result
}
// 获取热门歌手
const getRecommendSingerList = async () => {
  const param = { limit: 10 }
  const res = await homeHttp.getTopSingerList(param)
  homeData.singerList = res.artists
}
onLoad(() => {
  getBannerList()
  getRecommendSongList()
  getRecommendNewSongList()
  getRecommendMvList()
  getRecommendSingerList()
})
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
