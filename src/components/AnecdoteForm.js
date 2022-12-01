import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreate = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    dispatch(createAnecdote(content))
    event.target.content.value = ''
  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
