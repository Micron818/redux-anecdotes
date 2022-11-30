import { createSlice } from '@reduxjs/toolkit'

const initialState = 'notification ... '

const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      const notification = action.payload
      return notification
    },
    clearNotification(state, action) {
      return initialState
    },
  },
})

export const { showNotification, clearNotification } =
  notificationReducer.actions
export default notificationReducer.reducer
