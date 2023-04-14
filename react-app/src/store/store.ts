import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formCardReducer from './reducers/FormCardSlice';

const rootReducer = combineReducers({
  formCardReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
