import React from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

function NewForm(props) {
	const { label, value, isExpense, setLabel, setValue, setIsExpense } = props;
	return (
		<>
			<Form.Group>
				<Form.Input
					icon="tags"
					width={12}
					label="Description"
					placeholder="Enter Transaction"
					value={label}
					onChange={(event) => setLabel(event.target.value)}
				/>
				<Form.Input
					icon="dollar"
					width={4}
					label="Value"
					placeholder="100.00"
					iconPosition="left"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</Form.Group>
			<Segment compact>
				<Checkbox
					toggle
					label="Is Expense?"
					checked={isExpense}
					onChange={() => setIsExpense((oldState) => !oldState)}
				/>
			</Segment>
		</>
	);
}

export default NewForm;
