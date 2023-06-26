import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h2>Counter</h2>
			<p>{count}</p>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default Counter;
