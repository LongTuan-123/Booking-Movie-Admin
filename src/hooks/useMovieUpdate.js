import { useMutation } from 'react-query'
import { API_MOVIE_UPDATE } from '../config/endpointapi'
import { putAxios } from '../Http'

const updateMovie = async (params) => {
  return await putAxios(API_MOVIE_UPDATE, params)
}

const useMovieUpdate = () => {
  return useMutation(updateMovie)
}

export default useMovieUpdate
