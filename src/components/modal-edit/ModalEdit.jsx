import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { NewForm } from '..';

function ModalEdit(props) {
	const {
		isOpen,
		setIsOpen,
		label,
		value,
		isExpense,
		setLabel,
		setValue,
		setIsExpense,
	} = props;
	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit Line Item</Modal.Header>
			<Modal.Content>
				<NewForm
					label={label}
					value={value}
					isExpense={isExpense}
					setLabel={setLabel}
					setValue={setValue}
					setIsExpense={setIsExpense}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setIsOpen(false)}>Close</Button>
				<Button onClick={() => setIsOpen(false)} primary>Save</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default ModalEdit;
