import { api } from 'services/api'

export const getHighLightedBooks = () => api.get('/book?highlighted=true', {
  headers: {
    Authorization: `bearer ${localStorage.getItem('@bookclub_TOKEN')}`
  }
})

export const getBooksByCategory = (id) => 
  api.get(`/book?category_id=${id}`, {
  headers: {
    Authorization: `bearer ${localStorage.getItem('@bookclub_TOKEN')}`
  }
})

export const getBookDetail = (id) => 
  api.get(`/book/${id}`, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_TOKEN')}`
    }
  })
