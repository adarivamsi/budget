import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { StatisticVals } from '..';

function DisplayBalances(props) {
	const { income, expense } = props;
	return (
		<Segment textAlign="center">
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<StatisticVals
							size="tiny"
							color="green"
							label="Income"
							value={income}
						/>
					</Grid.Column>
					<Grid.Column>
						<StatisticVals
							size="tiny"
							color="red"
							label="Expenses"
							value={expense}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}

export default DisplayBalances;
