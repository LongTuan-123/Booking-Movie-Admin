import { useMutation } from 'react-query'
import { API_SHOWTIME_UPDATE } from '../config/endpointapi'
import { putAxios } from '../Http'

const updateShowtime = async (params) => {
  return await putAxios(API_SHOWTIME_UPDATE, params)
}

const useShowtimeUpdate = () => {
  return useMutation(updateShowtime)
}

export default useShowtimeUpdate
