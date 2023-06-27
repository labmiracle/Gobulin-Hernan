import React from 'react';
import LoginPage from './components/conditional_rendering';
import './App.css';

const App: React.FC = () => {
	return (
		<div>
			<h1>My App</h1>
			<LoginPage />
		</div>
	);
};

export default App;
