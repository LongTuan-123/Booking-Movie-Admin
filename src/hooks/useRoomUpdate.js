import { useMutation } from 'react-query'
import { API_ROOM_UPDATE } from '../config/endpointapi'
import { putAxios } from '../Http'

const updateRoom = async (params) => {
  return await putAxios(API_ROOM_UPDATE, params)
}

const useRoomUpdate = () => {
  return useMutation(updateRoom)
}

export default useRoomUpdate
