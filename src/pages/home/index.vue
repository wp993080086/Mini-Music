<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import homeHttp from '@/servers/api/home'
import { baseStoreModule } from '@/store'
import titleNav from '@/components/title-nav/index.vue'
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
  // getBannerList()
  // getRecommendSongList()
  getRecommendNewSongList()
  // getRecommendMvList()
  // getRecommendSingerList()
})
</script>

<template>
  <view class="home_box">
    <!-- 搜索框 -->
    <view class="search_box">
      <view class="search_main">
        <text class="search_text">搜索</text>
      </view>
    </view>
    <!-- banner图 -->
    <view class="switch_box">
      <!-- <swiper class="swiper" circular :indicator-dots="true" autoplay :interval="3000">
        <swiper-item v-for="(item, index) in homeData.bannerList" :key="index">
          <view class="swiper_item">
            <image :src="item.pic" />
          </view>
        </swiper-item>
      </swiper> -->
    </view>
    <!-- 推荐新音乐 -->
    <title-nav title="推荐新音乐" path="../home/index" />
    <view class="recommend_new_song_box">
      <h1>1</h1>
    </view>
  </view>
</template>

<style scoped lang="scss">
.home_box {
  @include set_w_h();
  .search_box {
    width: 100%;
    padding: 20rpx 32rpx;
    .search_main {
      @include flex_c;
      @include set_w_h(fill, 60);
      background-color: $white;
      border-radius: 30rpx;
      .search_text {
        color: $text4;
      }
    }
  }
  .switch_box {
    @include set_w_h(fill, 320);
    .swiper {
      @include set_w_h();
      .swiper_item {
        @include set_w_h();
      }
    }
  }
  .recommend_new_song_box {
    @include set_w_h(fill, 240);
    padding: 0rpx 32rpx;
  }
}
</style>
