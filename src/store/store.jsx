import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import lineItemsReducer from '../reducers/lineItemsSlice';
import modalsReducer from '../reducers/modalsSlice';
import initSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
	reducer: {
		lineItems: lineItemsReducer,
		modals: modalsReducer,
	},
	middleware,
});

initSagas(sagaMiddleware);

export default store;
