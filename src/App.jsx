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
	const [isOpen, setIsOpen] = useState(false);
	const [lineItemId, setLineItemId] = useState();
	const [label, setLabel] = useState('');
	const [value, setValue] = useState();
	const [isExpense, setIsExpense] = useState(true);
	const lineItems = useSelector((state) => state.lineItems);
	// const dispatch = useDispatch();

	// const resetTransactionForm = () => {
	// 	setLabel('');
	// 	setValue('');
	// 	setIsExpense(true);
	// };

	useEffect(() => {
		if (!isOpen && lineItemId) {
			// const idx = lineItems.fin dIndex((lineItem) => lineItem.id === lineItemId);
			// const newLineItems = [...lineItems];
			// newLineItems[idx].label = label;
			// newLineItems[idx].value = value;
			// newLineItems[idx].isExpense = isExpense;
			// setLineItems(newLineItems);
			// resetTransactionForm();
		}
	}, [isOpen]);

	useEffect(() => {
		let totalIncomes = 0;
		let totalExpenses = 0;
		lineItems.map((lineItem) => {
			if (lineItem.isExpense) {
				totalExpenses += Number(lineItem.value);
				return totalExpenses;
			}
			totalIncomes += Number(lineItem.value);
			return totalIncomes;
		});
		setBalance(totalIncomes - totalExpenses);
		setIncome(totalIncomes);
		setExpense(totalExpenses);
	}, [lineItems]);

	const addLineItem = () => {
		// const addedLineItems = lineItems.concat({
		// 	id: lineItems.length + 1,
		// 	label,
		// 	value,
		// 	isExpense,
		// });
		// setLineItems(addedLineItems);
		// resetTransactionForm();
	};

	const editLineItem = (id) => {
		if (id) {
			// const index = lineItems.findIndex((lineItem) => lineItem.id === id);
			// const lineItem = lineItems[index];
			setLineItemId(id);
			// setLabel(lineItem.label);
			// setValue(lineItem.value);
			// setIsExpense(lineItem.isExpense);
			setIsOpen(true);
		}
	};

	return (
		<Container>
			<AppHeader title="Budget" type="h1" />
			<StatisticVals size="small" label="Balance" value={balance} />
			<DisplayBalances income={income} expense={expense} />
			<AppHeader title="History" type="h3" />
			<HistoryLines lineItems={lineItems} editLineItem={editLineItem} />
			<NewTransactionForm />
			<ModalEdit
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				addLineItem={addLineItem}
				label={label}
				value={value}
				isExpense={isExpense}
				setLabel={setLabel}
				setValue={setValue}
				setIsExpense={setIsExpense}
			/>
		</Container>
	);
}

export default App;
