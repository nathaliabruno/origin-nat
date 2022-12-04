import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './redux/slices/dateSlice';
import amountReducer from './redux/slices/amountSlice';

export default configureStore({
  reducer: {
    date: dateReducer,
    amount: amountReducer,
  },
});
