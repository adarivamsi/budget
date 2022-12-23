import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveCancel(props) {
	const { addLineItem } = props;
	return (
		<Button.Group style={{ marginTop: 20 }}>
			<Button>Cancel</Button>
			<Button.Or />
			<Button primary onClick={() => addLineItem()}>
				Ok
			</Button>
		</Button.Group>
	);
}

export default ButtonSaveCancel;
