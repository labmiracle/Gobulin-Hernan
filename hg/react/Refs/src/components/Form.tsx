import { useRef } from 'react';

const Form = () => {
	const input1Ref = useRef<HTMLInputElement | null>(null);
	const input2Ref = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const value1 = input1Ref.current?.value;
		const value2 = input2Ref.current?.value;

		console.log('Input value 1:', value1);
		console.log('Input value 2:', value2);

		// To clear fields after getting values
		if (input1Ref.current) {
			input1Ref.current.value = '';
		}
		if (input2Ref.current) {
			input2Ref.current.value = '';
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='input1'>Field 1:</label>
				<input type='text' id='input1' ref={input1Ref} />
			</div>
			<div>
				<label htmlFor='input2'>Field 2:</label>
				<input type='text' id='input2' ref={input2Ref} />
			</div>
			<button type='submit'>Send</button>
		</form>
	);
};

export default Form;
