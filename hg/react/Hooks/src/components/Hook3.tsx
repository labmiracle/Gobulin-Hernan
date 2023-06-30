import React, { useEffect, useState } from 'react';

interface Props {
	name: string;
}

const ComponentUpdate: React.FC<Props> = ({ name }) => {
	const [showMessage, setShowMessage] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowMessage(false);
			console.log('Updating!');
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [name]);

	return (
		<div>
			{showMessage ? (
				<div>{name} is here</div>
			) : (
				<div>
					{name} is not here, it was updated! (Please, refresh the page to see{' '}
					{name} again)
				</div>
			)}
		</div>
	);
};

export default ComponentUpdate;
