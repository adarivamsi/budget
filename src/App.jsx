import { Container } from 'semantic-ui-react';
import './App.css';
import {
	AppHeader,
	DisplayBalances,
	HistoryLine,
	NewTransactionForm,
	StatisticVals,
} from './components';

function App() {
	return (
		<Container>
			<AppHeader title="Budget" type="h1" />
			<StatisticVals size="small" label="Balance" value="10,500.50" />
			<DisplayBalances />
			<AppHeader title="History" type="h3" />
			<HistoryLine
				gridColumnLabel="JC Penney"
				gridColumnValue="$10.00"
				isExpense
			/>
			<HistoryLine
				gridColumnLabel="Walmart Paycheck"
				gridColumnValue="$100.00"
			/>
			<HistoryLine
				gridColumnLabel="Marshalls"
				gridColumnValue="$50.00"
				isExpense
			/>
			<NewTransactionForm />
		</Container>
	);
}

export default App;
