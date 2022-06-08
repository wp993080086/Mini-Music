export interface IPhoneLogin {
  phone: string
  password: string
}

export interface ISendCaptcha {
  phone: string
}

export interface ISignin {
  nickname: string
  phone: string
  password: string
  captcha: string
}

export interface IUserDetails {
  uid: string
}

export interface IUserUpData {
  gender: 0 | 1 | 2
  birthday: string
  nickname: string
  province: string
  city: string
  signature: string
}

export interface IUserSetPhone {
  phone: string
  oldcaptcha: string
  captcha: string
  countrycode?: string
}

export type TSetUserAvatar = Partial<{
  imgSize: string
  imgX: string
  imgY: string
}>
