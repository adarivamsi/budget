import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
	{
		id: 1,
		label: 'JC Penney',
		value: 10,
		isExpense: true,
	},
	{
		id: 2,
		label: 'Walmart Paycheck',
		value: 100,
		isExpense: false,
	},
	{
		id: 3,
		label: 'Marshalls',
		value: 10,
		isExpense: true,
	},
];

export const lineItemsSlice = createSlice({
	name: 'lineItems',
	initialState: initialStateValue,
	reducers: {
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
			if (action.payload) {
				const index = state.findIndex((lineItem) => lineItem.id === action.payload);
				const lineItem = state[index];
				return lineItem;
			}
			return state;
		},
	},
});

export const { addLineItem, deleteLineItem, editLineItem } =
	lineItemsSlice.actions;

export default lineItemsSlice.reducer;
