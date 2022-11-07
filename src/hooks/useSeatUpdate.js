import { useMutation } from 'react-query'
import { API_SEAT_UPDATE } from '../config/endpointapi'
import { putAxios } from '../Http'

const updateSeat = async (params) => {
  return await putAxios(API_SEAT_UPDATE, params)
}

const useSeatUpdate = () => {
  return useMutation(updateSeat)
}

export default useSeatUpdate
