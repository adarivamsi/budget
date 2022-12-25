import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { NewForm } from '..';
import useLineItemDetails from '../../hooks/useLineItemDetails';
import { closeEditModal } from '../../reducers/modalsSlice';

function ModalEdit(props) {
	const { isOpen, lineItem } = props;
	const dispatch = useDispatch();
	const lineItemUpdate = useLineItemDetails(
		lineItem.label,
		lineItem.value,
		lineItem.isExpense
	);

	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit Line Item</Modal.Header>
			<Modal.Content>
				<NewForm
					label={lineItemUpdate.label}
					value={lineItemUpdate.value}
					isExpense={lineItemUpdate.isExpense}
					setLabel={lineItemUpdate.setLabel}
					setValue={lineItemUpdate.setValue}
					setIsExpense={lineItemUpdate.setIsExpense}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => dispatch(closeEditModal())}>Close</Button>
				<Button
					onClick={() => lineItemUpdate.updateLineItem(lineItem.id)}
					primary
				>
					Save
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default ModalEdit;
