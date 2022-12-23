import React from 'react';
import { Header } from 'semantic-ui-react';

function AppHeader(props) {
	const { title, type } = props;
	return <Header as={type}>{title}</Header>;
}

export default AppHeader;
