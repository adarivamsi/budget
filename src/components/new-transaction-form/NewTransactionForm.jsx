import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { v4 as uuidV4 } from 'uuid';
import { ButtonSaveCancel, NewForm } from '..';
import { addLineItem } from '../../reducers/lineItemsSlice';

function NewTransactionFrom() {
	const [label, setLabel] = useState('');
	const [value, setValue] = useState();
	const [isExpense, setIsExpense] = useState(true);
	const dispatch = useDispatch();

	const addNewLineItem = () => {
		dispatch(
			addLineItem({
				id: uuidV4(),
				label,
				value,
				isExpense,
			})
		);
		setLabel('');
		setValue('');
		setIsExpense(true);
	};

	return (
		<Form unstackable>
			<NewForm
				label={label}
				value={value}
				isExpense={isExpense}
				setLabel={setLabel}
				setValue={setValue}
				setIsExpense={setIsExpense}
			/>
			<ButtonSaveCancel addNewLineItem={addNewLineItem} />
		</Form>
	);
}

export default NewTransactionFrom;
