import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Button = () => {
	const { toggleLanguage } = useContext(LanguageContext);

	const handleClick = () => {
		toggleLanguage();
	};

	return <button onClick={handleClick}>Change Language</button>;
};

export default Button;
