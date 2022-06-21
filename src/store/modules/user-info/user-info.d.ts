export interface IuserInfo {
  followed: boolean
  backgroundUrl: string
  detailDescription: string
  backgroundImgIdStr: string
  avatarImgIdStr: string
  userId: number
  userType: number
  vipType: number
  gender: number
  accountStatus: number
  avatarImgId: number
  nickname: string
  backgroundImgId: number
  birthday: number
  city: number
  avatarUrl: string
  defaultAvatar: boolean
  province: number
  expertTags: TAnyObject
  experts: TAnyObject
  mutual: boolean
  remarkName: string
  authStatus: number
  djStatus: number
  description: string
  signature: string
  authority: number
  avatarImgId_str: string
  followeds: number
  follows: number
  eventCount: number
  avatarDetail: TAnyObject
  playlistCount: number
  playlistBeSubscribedCount: number
}

export interface IUserInfoModule {
  cookie: string
  token: string
  userInfo: IuserInfo
}
