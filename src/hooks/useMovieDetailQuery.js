import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_MOVIE_DETAIL } from '../config/endpointapi'
import { bindParams } from '../config/function'

const getMovie = async (id) => {
  const { data } = await getAxios(bindParams(API_MOVIE_DETAIL, { id }))

  return data
}

const useMovieDetailQuery = (id) => {
  return useQuery(['movie_detail'], () => getMovie(id), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useMovieDetailQuery
