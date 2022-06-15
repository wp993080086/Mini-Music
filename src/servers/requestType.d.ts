export type THeaderOption = {
  contentType?: string
  token?: string
}

export type TPatamOption = {
  isToken?: boolean
}

type TRequestResult = {
  code: number
  data: TAny
  message: string
}

export type TPostFn = (
  api: string,
  param?: TAnyObject,
  option?: TPatamOption
) => Promise<TRequestResult>
