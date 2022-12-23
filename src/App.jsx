import { useEffect, useState } from 'react';
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
	const initialLineItems = [
		{
			id: 1,
			label: 'JC Penney',
			value: '$10.00',
			isExpense: true,
		},
		{
			id: 2,
			label: 'Walmart Paycheck',
			value: '$100.00',
			isExpense: false,
		},
		{
			id: 3,
			label: 'Marshalls',
			value: '$10.00',
			isExpense: true,
		},
	];
	const [lineItems, setLineItems] = useState(initialLineItems);
	const [label, setLabel] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpense] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [lineItemId, setLineItemId] = useState();

	const resetTransactionForm = () => {
		setLabel('');
		setValue('');
		setIsExpense(true);
	};

	useEffect(() => {
		if (!isOpen && lineItemId) {
			const idx = lineItems.findIndex((lineItem) => lineItem.id === lineItemId);
			const newLineItems = [...lineItems];
			newLineItems[idx].label = label;
			newLineItems[idx].value = value;
			newLineItems[idx].isExpense = isExpense;
			setLineItems(newLineItems);
			resetTransactionForm();
		}
	}, [isOpen]);

	const deleteLineItem = (id) => {
		const retreivedLineItems = lineItems.filter(
			(lineItem) => lineItem.id !== id
		);
		setLineItems(retreivedLineItems);
	};

	const addLineItem = () => {
		const addedLineItems = lineItems.concat({
			id: lineItems.length + 1,
			label,
			value,
			isExpense,
		});
		setLineItems(addedLineItems);
		resetTransactionForm();
	};

	const editLineItem = (id) => {
		if (id) {
			const index = lineItems.findIndex((lineItem) => lineItem.id === id);
			const lineItem = lineItems[index];
			setLineItemId(id);
			setLabel(lineItem.label);
			setValue(lineItem.value);
			setIsExpense(lineItem.isExpense);
			setIsOpen(true);
		}
	};

	return (
		<Container>
			<AppHeader title="Budget" type="h1" />
			<StatisticVals size="small" label="Balance" value="10,500.50" />
			<DisplayBalances />
			<AppHeader title="History" type="h3" />
			<HistoryLines
				lineItems={lineItems}
				deleteLineItem={deleteLineItem}
				editLineItem={editLineItem}
			/>
			<NewTransactionForm
				addLineItem={addLineItem}
				label={label}
				value={value}
				isExpense={isExpense}
				setLabel={setLabel}
				setValue={setValue}
				setIsExpense={setIsExpense}
			/>
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
