import { api } from 'services/api'

export const getHighLightedBooks = () => api.get('/book?highleghted=true', {
  headers: {
    Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
  }
})

export const getBooksByCategory = (id) => api.get(`/book?category_id=${id}`, {
  headers: {
    Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
  }
})