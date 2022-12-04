import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './redux/slices/dateSlice';

export default configureStore({
  reducer: {
    date: dateReducer,
  },
});
