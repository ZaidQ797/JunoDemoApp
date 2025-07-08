import { configureStore } from '@reduxjs/toolkit';
import { authReducer, appReducer } from '@slices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
