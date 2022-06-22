interface ISafeAreaInsets {
  top: number
  left: number
  right: number
  bottom: number
}

interface ISafeArea {
  top: number
  left: number
  right: number
  bottom: number
  width: number
  height: number
}

export interface ISystemInfo {
  safeAreaInsets: ISafeAreaInsets
  deviceId: string
  appId: string
  appName: string
  appVersion: string
  appVersionCode: string
  appLanguage: string
  uniCompileVersion: string
  uniRuntimeVersion: string
  uniPlatform: string
  deviceBrand: string
  deviceModel: string
  deviceType: string
  devicePixelRatio: number
  deviceOrientation: string
  osName: string
  osVersion: string
  hostVersion: string
  hostLanguage: string
  hostName: string
  hostSDKVersion: string
  hostFontSizeSetting: number
  windowTop: number
  windowBottom: number
  errMsg: string
  model: string
  pixelRatio: number
  windowWidth: number
  windowHeight: number
  system: string
  language: string
  version: string
  screenWidth: number
  screenHeight: number
  SDKVersion: string
  brand: string
  fontSizeSetting: number
  benchmarkLevel: number
  batteryLevel: number
  statusBarHeight: number
  bluetoothEnabled: boolean
  locationEnabled: boolean
  wifiEnabled: boolean
  cameraAuthorized: boolean
  locationAuthorized: boolean
  microphoneAuthorized: boolean
  notificationAuthorized: boolean
  safeArea: ISafeArea
  platform: string
  enableDebug: boolean
  mode: string
}

export interface IBaseData {
  systemInfo: ISystemInfo
}
