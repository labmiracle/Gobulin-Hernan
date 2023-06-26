import React, { useState } from 'react';

const TextInputComponent: React.FC = () => {
	const [inputText, setInputText] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	};

	return (
		<div>
			<input type='text' value={inputText} onChange={handleInputChange} />
			<p>Text: {inputText}</p>
		</div>
	);
};

export default TextInputComponent;
