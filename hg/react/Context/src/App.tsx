import React, { useState } from 'react';
import MainText from './components/MainText';
import Button from './components/Button';
import './App.css';

type Language = 'es' | 'en';

interface ContextProps {
	language: Language;
	toggleLanguage: () => void;
}

export const LanguageContext = React.createContext<ContextProps>({
	language: 'es',
	toggleLanguage: () => {},
});

const App = () => {
	const [language, setLanguage] = useState<Language>('es');

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			<div>
				<h1>Click on the button</h1>
				<h2>to change the language of the labels below</h2>
				<div className='containerApp'>
					<MainText />
					<Button />
				</div>
			</div>
		</LanguageContext.Provider>
	);
};

export default App;
