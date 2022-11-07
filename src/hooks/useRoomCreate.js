import { useMutation } from 'react-query'
import { API_ROOM_STORE } from '../config/endpointapi'
import { postAxios } from '../Http'

const createRoom = async (params) => {
  return await postAxios(API_ROOM_STORE, params)
}

const useRoomCreate = () => {
  return useMutation(createRoom)
}

export default useRoomCreate
