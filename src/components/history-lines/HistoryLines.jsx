import React from 'react';
import { Container } from 'semantic-ui-react';
import { HistoryLine } from '..';

function HistoryLines(props) {
	const { lineItems } = props;
	return (
		<Container>
			{lineItems.map((lineItem) => (
				<HistoryLine
					key={lineItem.id}
					id={lineItem.id}
					isExpense={lineItem.isExpense}
					label={lineItem.label}
					value={lineItem.value}
				/>
			))}
		</Container>
	);
}

export default HistoryLines;
