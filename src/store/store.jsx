import { configureStore } from '@reduxjs/toolkit';
import lineItemsReducer from '../reducers/lineItemsSlice';
import modalsReducer from '../reducers/modalsSlice';

export default configureStore({
	reducer: {
		lineItems: lineItemsReducer,
		modals: modalsReducer,
	},
});
