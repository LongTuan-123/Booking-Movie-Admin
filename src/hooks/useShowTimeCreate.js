import { useMutation } from 'react-query'
import { API_SHOWTIME_STORE } from '../config/endpointapi'
import { postAxios } from '../Http'

const createShowtime = async (params) => {
  return await postAxios(API_SHOWTIME_STORE, params)
}

const useShowtimeCreate = () => {
  return useMutation(createShowtime)
}

export default useShowtimeCreate
