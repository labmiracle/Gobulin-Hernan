import React from 'react';
import ApiComponent from './components/ApiComponent';
import TextInputComponent from './components/TextInputComponent';
import SelectComponent from './components/SelectComponent';
import './App.css';

const App: React.FC = () => {
	return (
		<div>
			<h1>My App</h1>
			<ApiComponent />
			<TextInputComponent />
			<SelectComponent />
		</div>
	);
};

export default App;
