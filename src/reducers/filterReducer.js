import { createSlice } from '@reduxjs/toolkit'

const filterReducer = createSlice({
  name: 'filter',
  initialState: 'ALL',
  reducers: {
    filterAnecdotes(state, action) {
      const content = action.payload
      return content
    },
  },
})

export const { filterAnecdotes } = filterReducer.actions

export default filterReducer.reducer
