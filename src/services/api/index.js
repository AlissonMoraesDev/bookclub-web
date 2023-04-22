import axios from 'axios'
import { QueryClient } from 'react-query'
import { restoreItem } from 'services/storage'

export const api = axios.create({
  baseURL: 'https://api.bookclub.mapadaprogramacao.com.br',
  headers: {
    'Authorization': `bearer ${restoreItem('@bookclub_TOKEN')}`
  }
})

export const queryClient = new QueryClient()