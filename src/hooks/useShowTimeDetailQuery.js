import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_SHOWTIME_DETAIL } from '../config/endpointapi'
import { bindParams } from '../config/function'

const getShowtime = async (id) => {
  const { data } = await getAxios(bindParams(API_SHOWTIME_DETAIL, { id }))

  return data
}

const useShowtimeDetailQuery = (id) => {
  return useQuery(['showtime_detail'], () => getShowtime(id), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useShowtimeDetailQuery
