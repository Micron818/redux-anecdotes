import { createSlice } from '@reduxjs/toolkit'

const initialState = 'notification ... '

const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      const notification = action.payload
      return notification
    },
    clearNotification(state, action) {
      return initialState
    },
  },
})

let timeoutId

export const setNotification = (notification, seconds) => {
  return async (dispatch) => {
    dispatch(notificationReducer.actions.setNotification(notification))

    clearTimeout(timeoutId)
    timeoutId = setTimeout(
      () => dispatch(notificationReducer.actions.setNotification(initialState)),
      seconds * 1000
    )
  }
}

export default notificationReducer.reducer
