import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function HistoryLine(props) {
	const { id, isExpense, label, value, deleteLineItem, editLineItem } = props;
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
						<Icon name="edit" onClick={() => editLineItem(id)} />
						<Icon name="delete" onClick={() => deleteLineItem(id)} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}

export default HistoryLine;
