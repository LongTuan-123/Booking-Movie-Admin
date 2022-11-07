import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_ROOM_DETAIL } from '../config/endpointapi'
import { bindParams } from '../config/function'

const getRoom = async (id) => {
  const { data } = await getAxios(bindParams(API_ROOM_DETAIL, { id }))

  return data
}

const useRoomDetailQuery = (id) => {
  return useQuery(['room_detail'], () => getRoom(id), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useRoomDetailQuery
