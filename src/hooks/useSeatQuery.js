import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_SEAT } from '../config/endpointapi'


const getSeat = async ({ queryKey }) => {
  const [_, limit, keyword, page] = queryKey

  const params = { limit, keyword, page }

  const data = await getAxios(API_SEAT, params)

  return data
}

const useSeatQuery = (params) => {
  return useQuery(['seat', ...params], getSeat, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useSeatQuery
