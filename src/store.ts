import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import dateReducer from './redux/slices/dateSlice';
import amountReducer from './redux/slices/amountSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  date: dateReducer,
  amount: amountReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
