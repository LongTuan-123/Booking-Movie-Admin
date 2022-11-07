import { useMutation } from 'react-query'
import { API_MOVIE_STORE } from '../config/endpointapi'
import { postAxios } from '../Http'

const createMovie = async (params) => {
  return await postAxios(API_MOVIE_STORE, params)
}

const useMovieCreate = () => {
  return useMutation(createMovie)
}

export default useMovieCreate
