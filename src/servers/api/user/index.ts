import Request from '@/servers/request'
import {
  IPhoneLogin,
  ISendCaptcha,
  ISignin,
  IUserDetails,
  IUserUpData,
  IUserSetPhone,
  TSetUserAvatar
} from './user'

const Interface = {
  /**
   * 手机号码登录
   * @param {String} phone 账号
   * @param {String} password 密码
   */
  phoneLogin(param: IPhoneLogin) {
    return Request.post('/login/cellphone', { ...param })
  },
  /**
   * 发送验证码
   * @param String} phone 手机号码
   */
  sendCaptcha(param: ISendCaptcha) {
    return Request.post('/captcha/sent', { ...param })
  },
  /**
   * 注册&修改密码
   * @param {String} nickname 昵称
   * @param {String} phone 手机号码
   * @param {String} password 密码
   * @param {String} captcha 验证码
   */
  signin(param: ISignin) {
    return Request.post('/register/cellphone', { ...param })
  },
  /**
   * 登录后获取账号信息
   */
  getUserAccount() {
    return Request.post('/user/account')
  },
  /**
   * 登录后获取用户的信息、收藏、歌单等
   */
  getUserInfo() {
    return Request.post('/user/subcount')
  },
  /**
   * 获取用户详情
   * @param {String} uid 用户ID
   */
  getUserDetails(param: IUserDetails) {
    return Request.post('/user/detail', { ...param })
  },
  /**
   * 获取用户等级信息
   */
  getUserLevel() {
    return Request.post('/user/level')
  },
  /**
   * 设置用户信息
   * @param {String} gender 性别 0:保密 1:男性 2:女性
   * @param {unix timestamp} birthday 出生日期
   * @param {String} nickname 用户昵称
   * @param {String} province 省份ID
   * @param {String} city 城市ID
   * @param {String} signature 用户签名
   */
  setUserInfo(param: IUserUpData) {
    return Request.post('/user/update', { ...param })
  },
  /**
   * 更换绑定手机
   * @param {String} phone 更换的手机号码
   * @param {String} oldcaptcha 原手机号码的验证码
   * @param {String} captcha 新手机号码的验证码
   * @param {String} countrycode 国家地区代码、默认86
   */
  setUserPhone(param: IUserSetPhone) {
    return Request.post('/user/replacephone', { ...param })
  },
  /**
   * 更新头像(使用'Content-Type': 'multipart/form-data'上传图片 formData(name 为'imgFile'),)
   * @param {String} imgSize 图片尺寸、默认为300
   * @param {String} imgX 水平裁剪偏移
   * @param {String} imgY 垂直裁剪偏移
   */
  setUserAvatar(param: TSetUserAvatar) {
    return Request.post('/avatar/upload', { ...param })
  }
}

export default Interface
