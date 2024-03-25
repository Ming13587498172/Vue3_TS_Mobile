import { BannerItem, CategoryItem, GuessItem, HotItem } from "@/type"
import { PageParams, PageResult } from "@/type/global"
import request from "@/utils/request"

/**
 * 轮播图
 * @param distributionSite 活动 banner 位置，1 代表首页，2 代表商品分类页，默认为 1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return request<BannerItem>({
    method: 'get',
    url: '/home/banner',
    data: distributionSite
  })
}

/**
 * 前台分类
 */
export const getHomeCategoryAPI = () => {
  return request<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 热门推荐
 */
export const getHomeHotAPI = () => {
  return request<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 热门推荐
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return request<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
