import { configureStore } from '@reduxjs/toolkit';
import lineItemsReducer from '../reducers/lineItemsSlice';

export default configureStore({
	reducer: {
		lineItems: lineItemsReducer,
	}
});
