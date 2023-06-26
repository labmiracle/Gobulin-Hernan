import { useState } from 'react';
import CounterButton from './CounterButton';
import TextDisplay from './TextDisplay';

const CounterRefactored = () => {
	const [count, setCount] = useState(0);
	const [text, setText] = useState('');

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	const addLetter = () => {
		setText(text + 'a');
	};

	const removeLetter = () => {
		setText(text.slice(0, -1));
	};

	return (
		<div>
			<h2>Counter Refactored</h2>
			<TextDisplay text={count.toString()} />
			<CounterButton onClick={decrement} text='Decrement' />
			<CounterButton onClick={increment} text='Increment' />

			<h2>String Manipulator Refactored</h2>
			<TextDisplay text={text} />
			<CounterButton onClick={removeLetter} text='Decrement' />
			<CounterButton onClick={addLetter} text='Increment' />
		</div>
	);
};

export default CounterRefactored;
