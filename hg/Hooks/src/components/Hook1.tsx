import { useState } from 'react';

const TextField: React.FC = () => {
	const [text, setText] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newText = event.target.value.replace(/a/g, 'b');
		setText(newText);
	};

	return <input type='text' value={text} onChange={handleChange} />;
};

export default TextField;
