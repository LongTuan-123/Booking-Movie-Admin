import { useMutation } from 'react-query'
import { API_NEWS_UPDATE } from '../config/endpointapi'
import { putAxios } from '../Http'

const updateNews = async (params) => {
  return await putAxios(API_NEWS_UPDATE, params)
}

const useNewsUpdate = () => {
  return useMutation(updateNews)
}

export default useNewsUpdate
