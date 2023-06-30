import { useEffect, useState } from 'react';

const UnmountComponent: React.FC = () => {
	const [showComponent, setShowComponent] = useState(true);

	const handleUnmount = () => {
		setShowComponent(false);
	};

	useEffect(() => {
		if (!showComponent) {
			console.log('Disassemble!');
		}
	}, [showComponent]);

	return (
		<div>
			{showComponent ? (
				<div>
					<button onClick={handleUnmount}>Click to unmount component</button>
				</div>
			) : null}
		</div>
	);
};

export default UnmountComponent;
