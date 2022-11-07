import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_NEWS } from '../config/endpointapi'


const getNews = async ({ queryKey }) => {
  const [_, limit, keyword, page] = queryKey

  const params = { limit, keyword, page }

  const data = await getAxios(API_NEWS, params)

  return data
}

const useNewsQuery = (params) => {
  return useQuery(['news', ...params], getNews, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useNewsQuery
