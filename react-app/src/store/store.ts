import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formCardReducer from './reducers/FormCardSlice';
import searchTextReducer from './reducers/SearchTextSlice';
import cardReducer from './reducers/CardSlice';
import { cardAPI } from '../services/cardService';

const rootReducer = combineReducers({
  formCardReducer,
  searchTextReducer,
  cardReducer,
  [cardAPI.reducerPath]: cardAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
