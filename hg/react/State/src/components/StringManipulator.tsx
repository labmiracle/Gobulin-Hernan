import { useState } from 'react';

const StringManipulator = () => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);

	const letters = 'MiracleLab ';

	const increment = () => {
		setText(text + letters[index % letters.length]);
		setIndex(index + 1);
	};

	const decrement = () => {
		if (text.length > 0) {
			setText(text.slice(0, -1));
			setIndex(index - 1);
		}
	};

	return (
		<div>
			<h2>String Manipulator</h2>
			<p>{text}</p>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default StringManipulator;
