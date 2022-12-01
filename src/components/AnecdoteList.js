import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === 'ALL') {
      return anecdotes
    }
    return anecdotes.filter((ancedote) =>
      ancedote.content.match(new RegExp(filter, 'i'))
    )
  })

  const handleVote = async (anecdote) => {
    dispatch(updateAnecdote({ ...anecdote, votes: anecdote.votes + 1 }))

    const notification = `you voted ${anecdote.content}`
    dispatch(setNotification(notification, 5))
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
