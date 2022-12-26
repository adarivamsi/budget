import * as lineItemsSaga from './lineItemsSaga';

export default function initSagas(sagaMiddleware) {
	Object.values(lineItemsSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
