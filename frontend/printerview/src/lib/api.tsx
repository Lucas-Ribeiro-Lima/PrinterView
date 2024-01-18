import axios from 'axios'

export function ApiClient() {
  const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: 'API_SECRET',
    },
  })

  return api
}