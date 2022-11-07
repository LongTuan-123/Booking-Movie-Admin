import { getAxios } from '../Http'
import { useQuery } from 'react-query'
import { API_MOVIE_CHART } from '../config/endpointapi'

const getMovie = ({ queryKey }) => {
  const [_, start_date, end_date] = queryKey
  const params = { start_date, end_date }
  const data = getAxios(API_MOVIE_CHART, params)

  return data
}

const useMovieChartQuery = (params) => {
  return useQuery(['movie_chart', ...params], getMovie, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  })
}

export default useMovieChartQuery
