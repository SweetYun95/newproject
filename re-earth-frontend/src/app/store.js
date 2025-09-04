import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../features/authSlice'
// import { userSlice } from '../features/userSlice'
// import { itemSlice } from '../features/itemSlice'
// import { orderSlice } from '../features/orderSlice'
// import { pointSlice } from '../features/pointSlice'
// import { marketSlice } from '../features/marketSlice'
// import { chatSlice } from '../features/chatSlice'
// import { adminSlice } from '../features/adminSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      // user: userSlice.reducer,
      // item: itemSlice.reducer,
      // order: orderSlice.reducer,
      // point: pointSlice.reducer,
      // market: marketSlice.reducer,
      // chat: chatSlice.reducer,
      // admin: adminSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})
