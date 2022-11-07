import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_NEWS_DETAIL } from '../config/endpointapi'
import { bindParams } from '../config/function'

const getNews = async (id) => {
  const { data } = await getAxios(bindParams(API_NEWS_DETAIL, { id }))

  return data
}

const useNewsDetailQuery = (id) => {
  return useQuery(['news_detail'], () => getNews(id), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useNewsDetailQuery
