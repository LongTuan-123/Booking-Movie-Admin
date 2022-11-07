import { useMutation } from 'react-query'
import { API_SEAT_STORE } from '../config/endpointapi'
import { postAxios } from '../Http'

const createSeat = async (params) => {
  return await postAxios(API_SEAT_STORE, params)
}

const useSeatCreate = () => {
  return useMutation(createSeat)
}

export default useSeatCreate
