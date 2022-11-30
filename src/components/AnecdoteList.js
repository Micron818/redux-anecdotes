import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {
  clearNotification,
  showNotification,
} from '../reducers/notificationReducer'

let timeoutId

const AnecdoteList = (props) => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === 'ALL') {
      return anecdotes
    }
    return anecdotes.filter((ancedote) =>
      ancedote.content.match(new RegExp(filter, 'i'))
    )
  })
  const dispatch = useDispatch()

  const handleVote = (id) => {
    dispatch(addVote(id))
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id)
    const notification = `you voted ${anecdote.content}`
    dispatch(showNotification(notification))

    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
