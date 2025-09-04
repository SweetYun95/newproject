import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isAuthenticated: false,
   token: null,
   user: null,
   loading: false,
   error: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginStart: (state) => {
         state.loading = true
         state.error = null
      },
      loginSuccess: (state, action) => {
         state.isAuthenticated = true
         state.token = action.payload.token
         state.user = action.payload.user
         state.loading = false
      },
      loginFailure: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      logout: (state) => {
         return initialState
      },
   },
})
