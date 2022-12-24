import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveCancel(props) {
	const { addNewLineItem } = props;
	return (
		<Button.Group style={{ marginTop: 20 }}>
			<Button>Cancel</Button>
			<Button.Or />
			<Button primary onClick={() => addNewLineItem()}>
				Ok
			</Button>
		</Button.Group>
	);
}

export default ButtonSaveCancel;
