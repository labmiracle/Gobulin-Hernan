import React from 'react';
import ListContainer from './components/ListContainer';
import './App.css';

const App: React.FC = () => {
	const handleSubmit = (task: string) => {
		console.log(task);
	};

	return (
		<div className='app-container'>
			<ListContainer />
		</div>
	);
};

export default App;
