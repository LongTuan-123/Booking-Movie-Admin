import { useMutation } from 'react-query'
import { API_NEWS_STORE } from '../config/endpointapi'
import { postAxios } from '../Http'

const createNews = async (params) => {
  return await postAxios(API_NEWS_STORE, params)
}

const useNewsCreate = () => {
  return useMutation(createNews)
}

export default useNewsCreate
