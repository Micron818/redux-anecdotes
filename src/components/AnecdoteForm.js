import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const handleCreate = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    dispatch(addAnecdote(content))
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
