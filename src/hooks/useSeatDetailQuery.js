import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_SEAT_DETAIL } from '../config/endpointapi'
import { bindParams } from '../config/function'

const getSeat = async (id) => {
  const { data } = await getAxios(bindParams(API_SEAT_DETAIL, { id }))

  return data
}

const useSeatDetailQuery = (id) => {
  return useQuery(['seat_detail'], () => getSeat(id), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useSeatDetailQuery
