import { call, fork, put, take } from '@redux-saga/core/effects';
import axios from 'axios';
import {
	getLineItems,
	populateLineItemDetails,
	populateLineItems,
} from '../reducers/lineItemsSlice';

export function* getAllLineItems() {
	yield take(getLineItems);
	const { data } = yield call(axios, 'http://localhost:3002/lineItems');
	yield put(populateLineItems(data));
}

export function* getLineItemDetails(id) {
	const { data } = yield call(axios, `http://localhost:3002/lineValues/${id}`);
	yield put(populateLineItemDetails({ id, data }));
}

export function* getLineItemValues() {
	const { payload } = yield take(populateLineItems);
	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < payload.length; index++) {
		const lineItemValues = payload[index];
		yield fork(getLineItemDetails, lineItemValues.id);
	}
}
