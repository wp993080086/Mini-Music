export interface IBannerItem {
  pic: string
  targetId: number
  adid: TAny
  targetType: number
  titleColor: string
  typeTitle: string
  url: TAny
  adurlV2: TAny
  exclusive: boolean
  monitorImpress: TAny
  monitorClick: TAny
  monitorType: TAny
  monitorImpressList: TAnyArray
  monitorClickList: TAnyArray
  monitorBlackList: TAny
  extMonitor: TAny
  extMonitorInfo: TAny
  adSource: TAny
  adLocation: TAny
  encodeId: string
  program: TAny
  event: TAny
  video: TAny
  dynamicVideoData: TAny
  song: TAny
  bannerId: string
  alg: string
  scm: string
  requestId: string
  showAdTag: boolean
  pid: TAny
  showContext: TAny
  adDispatchJson: TAny
  s_ctrp: string
}

export interface ISongListItem {
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

interface Song {
  name: string
  id: number
  position: number
  alias: TAny[]
  status: number
  fee: number
  copyrightId: number
  disc: string
  no: number
  artists: newArtist[]
  album: Album
  starred: boolean
  popularity: number
  score: number
  starredNum: number
  duration: number
  playedNum: number
  dayPlays: number
  hearTime: number
  sqMusic: SqMusic
  hrMusic: HrMusic
  ringtone: string
  crbt: TAny
  audition: TAny
  copyFrom: string
  commentThreadId: string
  rtUrl: TAny
  ftype: number
  rtUrls: TAny[]
  copyright: number
  transName: TAny
  sign: TAny
  mark: number
  originCoverType: number
  originSongSimpleData: TAny
  single: number
  noCopyrightRcmd: TAny
  bMusic: BMusic
  mp3Url: TAny
  rtype: number
  rurl: TAny
  mvid: number
  hMusic: HMusic
  mMusic: MMusic
  lMusic: LMusic
  exclusive: boolean
  privilege: Privilege
}

interface newArtist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: TAny[]
  trans: string
  musicSize: number
  topicPerson: number
}

interface Album {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: Artist2
  songs: TAny[]
  alias: TAny[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist3[]
  subType: string
  transName: TAny
  onSale: boolean
  mark: number
  gapless: number
  picId_str: string
}

interface Artist2 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: TAny[]
  trans: string
  musicSize: number
  topicPerson: number
}

interface Artist3 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: TAny[]
  trans: string
  musicSize: number
  topicPerson: number
}

interface SqMusic {
  name: TAny
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

interface HrMusic {
  name: TAny
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

interface BMusic {
  name: TAny
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

interface HMusic {
  name: TAny
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

interface MMusic {
  name: TAny
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

export interface LMusic {
  name: TAny
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: TAny
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: TAny
}

interface ChargeInfoList {
  rate: number
  chargeUrl: TAny
  chargeMessage: TAny
  chargeType: number
}

export interface INewSongListItem {
  id: number
  type: number
  name: string
  copywriter: TAny
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: TAny
  song: Song
  alg: string
}

interface Artist {
  id: number
  name: string
}

export interface IMvListItem {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: TAny
  duration: number
  playCount: number
  subed: boolean
  artists: Artist[]
  artistName: string
  artistId: number
  alg: string
}

export interface ISingerListItem {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: string[]
  trans: string
  musicSize: number
  topicPerson: number
  showPrivateMsg: TAny
  isSubed: TAny
  accountId: TAny
  picId_str: string
  img1v1Id_str: string
  transNames: TAny
  followed: boolean
  mvSize: TAny
  publishTime: TAny
  identifyTag: TAny
  alg: TAny
  fansCount: TAny
}
