import React from 'react';
import { Statistic } from 'semantic-ui-react';

function StatisticVals(props) {
    const {size, color, label, value} = props;
	return (
		<Statistic size={size} color={color}>
			<Statistic.Label>{label}</Statistic.Label>
			<Statistic.Value>{value}</Statistic.Value>
		</Statistic>
	);
}

export default StatisticVals;
