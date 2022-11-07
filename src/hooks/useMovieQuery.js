import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_MOVIE } from '../config/endpointapi'


const getMovie = async ({ queryKey }) => {
  const [_, limit, keyword, page] = queryKey

  const params = { limit, keyword, page }

  const data = await getAxios(API_MOVIE, params)

  return data
}

const useMovieQuery = (params) => {
  return useQuery(['movie', ...params], getMovie, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useMovieQuery
