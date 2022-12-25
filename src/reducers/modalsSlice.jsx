import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
	isOpen: false,
	id: null,
};

export const modalsSlice = createSlice({
	name: 'modals',
	initialState: initialStateValue,
	reducers: {
		openEditModal: (state, action) => ({
			...state,
			isOpen: true,
			id: action.payload,
		}),
		closeEditModal: (state) => ({
			...state,
			isOpen: false,
			id: null,
		}),
	},
});

export const { openEditModal, closeEditModal } = modalsSlice.actions;

export default modalsSlice.reducer;
