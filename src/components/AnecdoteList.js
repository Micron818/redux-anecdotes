import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import {
  clearNotification,
  showNotification,
} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

let timeoutId

const AnecdoteList = (props) => {
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

    const updatedAnecdote = await anecdoteService.update({...anecdote,votes:anecdote.votes+1})    

    dispatch(updateAnecdote(updatedAnecdote))
    
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
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
