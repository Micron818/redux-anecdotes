import { connect } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const handleVote = async (anecdote) => {
    props.updateAnecdote({ ...anecdote, votes: anecdote.votes + 1 })

    const notification = `you voted ${anecdote.content}`
    props.setNotification(notification, 5)
  }

  return (
    <>
      {props.anecdotes.map((anecdote) => (
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

const mapStateToProps = (state) => {
  if (state.filter === 'ALL') {
    return { anecdotes: state.anecdotes }
  }
  return {
    anecdotes: state.anecdotes.filter((ancedote) =>
      ancedote.content.match(new RegExp(state.filter, 'i'))
    ),
  }
}

const mapDispatchToProps = { updateAnecdote, setNotification }

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
