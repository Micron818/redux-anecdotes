import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const ancedote = action.payload
      state.push(ancedote)
    },

    updateAnecdote(state, action) {
      const updatedAnecdote = action.payload
      return state
        .map((anecdote) =>
          anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
        )
        .sort((a, b) => b.votes - a.votes)
    },

    initAnecdotes(state, action) {
      const aneddotes = action.payload.sort((a, b) => b.votes - a.votes)
      return aneddotes
    },
  },
})

export const { createAnecdote, updateAnecdote, initAnecdotes } =
  anecdoteSlice.actions
export default anecdoteSlice.reducer
