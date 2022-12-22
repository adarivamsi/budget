import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
	return (
		<Container>
			<Header as="h1">Budget</Header>
			<Statistic size="small">
				<Statistic.Label>Balance</Statistic.Label>
				<Statistic.Value>10,500.50</Statistic.Value>
			</Statistic>
			<Segment textAlign="center">
				<Grid columns={2} divided>
					<Grid.Row>
						<Grid.Column>
							<Statistic size="tiny" color='green'>
								<Statistic.Label style={{ textAlign: 'left'}}>Income</Statistic.Label>
								<Statistic.Value>1,500.50</Statistic.Value>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic size="tiny" color='red'>
								<Statistic.Label style={{ textAlign: 'left'}}>Expenses</Statistic.Label>
								<Statistic.Value>500.50</Statistic.Value>
							</Statistic>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Header as='h3'>History</Header>
			<Segment color='red'>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column width={10} textAlign='left'>
							JC Penney
						</Grid.Column>
						<Grid.Column width={3} textAlign='right'>
							$10.00
						</Grid.Column>
						<Grid.Column width={3}>
							<Icon name='edit' />
							<Icon name='delete' />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment color='green'>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column width={10} textAlign='left'>
							Walmart Paycheck
						</Grid.Column>
						<Grid.Column width={3} textAlign='right'>
							$100.00
						</Grid.Column>
						<Grid.Column width={3}>
							<Icon name='edit' />
							<Icon name='delete' />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment color='red'>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column width={10} textAlign='left'>
							Marshalls
						</Grid.Column>
						<Grid.Column width={3} textAlign='right'>
							$50.00
						</Grid.Column>
						<Grid.Column width={3}>
							<Icon name='edit' />
							<Icon name='delete' />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Form unstackable>
				<Form.Group>
					<Form.Input icon='tags' width={12} label='Description' placeholder='Enter Transaction' />
					<Form.Input icon='dollar' width={4} label='Value' placeholder='100.00' iconPosition='left' />
				</Form.Group>
				<Button.Group style={{marginTop:20}}>
					<Button>Cancel</Button>
					<Button.Or />
					<Button primary>Ok</Button>
				</Button.Group>
			</Form>
		</Container>
	);
}

export default App;
