import React from 'react';
import { Container } from 'semantic-ui-react';
import { HistoryLine } from '..';

function HistoryLines(props) {
	const { lineItems, deleteLineItem, editLineItem } = props;
	return (
		<Container>
			{lineItems.map((lineItem) => (
				<HistoryLine
					key={lineItem.id}
					id={lineItem.id}
					isExpense={lineItem.isExpense}
					label={lineItem.label}
					value={lineItem.value}
					deleteLineItem={deleteLineItem}
					editLineItem={editLineItem}
				/>
			))}
		</Container>
	);
}

export default HistoryLines;
