import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { deleteLineItem } from '../../reducers/lineItemsSlice';
import { openEditModal } from '../../reducers/modalsSlice';

function HistoryLine(props) {
	const { id, isExpense, label, value } = props;
	const dispatch = useDispatch();
	return (
		<Segment color={isExpense ? 'red' : 'green'}>
			<Grid columns={3} textAlign="right">
				<Grid.Row>
					<Grid.Column width={10} textAlign="left">
						{label}
					</Grid.Column>
					<Grid.Column width={3} textAlign="right">
						${value}
					</Grid.Column>
					<Grid.Column width={3}>
						<Icon name="edit" onClick={() => dispatch(openEditModal(id))} />
						<Icon name="delete" onClick={() => dispatch(deleteLineItem(id))} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}

export default HistoryLine;
