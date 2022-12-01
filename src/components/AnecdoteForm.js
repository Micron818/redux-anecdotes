import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = (props) => {
  const handleCreate = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    props.createAnecdote(content)
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

const mapDispatchToProps = { createAnecdote }

export default connect(null, mapDispatchToProps)(AnecdoteForm)
