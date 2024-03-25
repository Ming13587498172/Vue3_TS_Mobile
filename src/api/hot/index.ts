import { PageParams } from "@/type/global"
import request from "@/utils/request"

type HotParams = PageParams & {
  /** Tab 项的 id，默认查询全部 Tab 项的第 1 页数据 */
  subType?: string
}

/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  // return request<HotResult>({
  return request({
    method: 'GET',
    url,
    data,
  })
}
