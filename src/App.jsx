import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import './App.css';
import {
	AppHeader,
	DisplayBalances,
	HistoryLines,
	ModalEdit,
	NewTransactionForm,
	StatisticVals,
} from './components';

function App() {
	const [balance, setBalance] = useState(0.0);
	const [income, setIncome] = useState(0.0);
	const [expense, setExpense] = useState(0.0);
	const [lineItem, setLineItem] = useState();
	const lineItems = useSelector((state) => state.lineItems);
	const { isOpen, id } = useSelector((state) => state.modals);

	useEffect(() => {
		const index = lineItems.findIndex((lItem) => lItem.id === id);
		setLineItem(lineItems[index]);
	}, [isOpen, id]);

	useEffect(() => {
		let totalIncomes = 0;
		let totalExpenses = 0;
		lineItems.map((lItem) => {
			if (lItem.isExpense) {
				totalExpenses += Number(lItem.value);
				return totalExpenses;
			}
			totalIncomes += Number(lItem.value);
			return totalIncomes;
		});
		setBalance(totalIncomes - totalExpenses);
		setIncome(totalIncomes);
		setExpense(totalExpenses);
	}, [lineItems]);

	return (
		<Container>
			<AppHeader title="Budget" type="h1" />
			<StatisticVals size="small" label="Balance" value={balance} />
			<DisplayBalances income={income} expense={expense} />
			<AppHeader title="History" type="h3" />
			<HistoryLines lineItems={lineItems} />
			<NewTransactionForm />
			{lineItem && <ModalEdit isOpen={isOpen} lineItem={lineItem} />}
		</Container>
	);
}

export default App;
