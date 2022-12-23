import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function HistoryLine(props) {
	const { isExpense, gridColumnLabel, gridColumnValue } = props;
	return (
		<Segment color={isExpense ? 'red' : 'green'}>
			<Grid columns={3} textAlign="right">
				<Grid.Row>
					<Grid.Column width={10} textAlign="left">
						{gridColumnLabel}
					</Grid.Column>
					<Grid.Column width={3} textAlign="right">
						{gridColumnValue}
					</Grid.Column>
					<Grid.Column width={3}>
						<Icon name="edit" />
						<Icon name="delete" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}

export default HistoryLine;
