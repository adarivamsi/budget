import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const lineItemsSlice = createSlice({
	name: 'lineItems',
	initialState: initialStateValue,
	reducers: {
		getLineItems: (state) => state,
		populateLineItems: (state, action) => action.payload,
		populateLineItemDetails: (state, action) => {
			const newLineItems = [...state];
			const index = newLineItems.findIndex(
				(lineItem) => lineItem.id === action.payload.id
			);
			newLineItems[index] = { ...newLineItems[index], ...action.payload.data };
			return newLineItems;
		},
		addLineItem: (state, action) => {
			const newLineItems = state.concat({ ...action.payload });
			return newLineItems;
		},
		deleteLineItem: (state, action) => {
			const retrievedLineItems = state.filter(
				(lineItem) => lineItem.id !== action.payload
			);
			return retrievedLineItems;
		},
		editLineItem: (state, action) => {
			const newLineItems = [...state];
			const index = newLineItems.findIndex(
				(lineItem) => lineItem.id === action.payload.id
			);
			newLineItems[index] = { ...newLineItems[index], ...action.payload.data };
			return newLineItems;
		},
	},
});

export const {
	getLineItems,
	populateLineItems,
	populateLineItemDetails,
	addLineItem,
	deleteLineItem,
	editLineItem,
} = lineItemsSlice.actions;

export default lineItemsSlice.reducer;
