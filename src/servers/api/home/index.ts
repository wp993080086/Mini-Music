import Request from '@/servers/request'
import { IBannerType, IPagingNumber } from './home'

const Interface = {
  /**
   * banner图
   * @param {Number} type 资源类型 pc：0、Android：1、ios：2、Ipad：3
   */
  async getBannerList(param: IBannerType) {
    return Request.post('/banner', { ...param })
  },
  /**
   * 推荐歌单
   * @param {Number} limit 数量
   */
  async getRecommendSongList(param: IPagingNumber) {
    return Request.post('/personalized', { ...param })
  },
  /**
   * 推荐新音乐
   * @param {Number} limit 数量
   */
  async getRecommendNewSongList(param: IPagingNumber) {
    return Request.post('/personalized/newsong', { ...param })
  },
  /**
   * 推荐Mv
   * @param {Number} limit 数量
   */
  async getRecommendMvList(param: IPagingNumber) {
    return Request.post('/personalized/mv', { ...param })
  },
  /**
   * 热门歌手
   * @param {Number} limit 数量
   */
  async getTopSingerList(param: IPagingNumber) {
    return Request.post('/top/artists', { ...param })
  }
}

export default Interface
