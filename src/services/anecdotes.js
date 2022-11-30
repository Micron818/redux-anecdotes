import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const add = async (content) => {
  const getId = () => (100000 * Math.random()).toFixed(0)
  const anecdote = { id: getId(), content: content, votes: 0 }
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const update = async (anecdote) => {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`,anecdote)
  return response.data
}

const anecdoteService = { getAll, add, update }
export default anecdoteService
