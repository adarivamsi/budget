import React from 'react';
import { Form } from 'semantic-ui-react';
import { ButtonSaveCancel } from '..';

function NewTransactionFrom() {
	return (
		<Form unstackable>
			<Form.Group>
				<Form.Input
					icon="tags"
					width={12}
					label="Description"
					placeholder="Enter Transaction"
				/>
				<Form.Input
					icon="dollar"
					width={4}
					label="Value"
					placeholder="100.00"
					iconPosition="left"
				/>
			</Form.Group>
			<ButtonSaveCancel />
		</Form>
	);
}

export default NewTransactionFrom;
