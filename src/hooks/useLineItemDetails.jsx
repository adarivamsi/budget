import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { addLineItem, editLineItem } from '../reducers/lineItemsSlice';
import { closeEditModal } from '../reducers/modalsSlice';

function useLineItemDetails(lbl = '', val = '', isExp = true) {
	const [label, setLabel] = useState(lbl);
	const [value, setValue] = useState(val);
	const [isExpense, setIsExpense] = useState(isExp);
	const dispatch = useDispatch();

	useEffect(() => {
		setLabel(lbl);
		setValue(val);
		setIsExpense(isExp);
	}, [lbl, val, isExp]);

	const resetForm = () => {
		setLabel('');
		setValue('');
		setIsExpense(true);
	};

	const addNewLineItem = () => {
		dispatch(
			addLineItem({
				id: uuidV4(),
				label,
				value,
				isExpense,
			})
		);
		resetForm();
	};

	const updateLineItem = (id) => {
		dispatch(
			editLineItem({
				id,
				lineItem: {
					id,
					label,
					value,
					isExpense,
				},
			})
		);
		dispatch(closeEditModal());
		resetForm();
	};

	return {
		label,
		setLabel,
		value,
		setValue,
		isExpense,
		setIsExpense,
		addNewLineItem,
		updateLineItem,
	};
}

export default useLineItemDetails;
