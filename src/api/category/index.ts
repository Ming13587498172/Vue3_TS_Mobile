import request from '@/utils/request'
import { CategoryTopItem } from "@/type/category"

/**
 * 分类列表
 */
export const getCategoryTopAPI = () => {
  return request<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
