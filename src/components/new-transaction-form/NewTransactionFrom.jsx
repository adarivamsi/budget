import React from 'react';
import { Form } from 'semantic-ui-react';
import { ButtonSaveCancel, NewForm } from '..';

function NewTransactionFrom(props) {
	const {
		addLineItem,
		label,
		value,
		isExpense,
		setLabel,
		setValue,
		setIsExpense,
	} = props;

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
			<ButtonSaveCancel addLineItem={addLineItem} />
		</Form>
	);
}

export default NewTransactionFrom;
