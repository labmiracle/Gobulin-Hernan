import React from 'react';
import TextField from './components/Hook1';
import UnmountComponent from './components/Hook2';
import ComponentUpdate from './components/Hook3';
import './App.css';

const App: React.FC = () => {
	return (
		<div>
			<h1>Hook_1 replaces every letter "a" with the letter "b"</h1>
			<TextField />
			<h1>Hook_2 component to be disassembled</h1>
			<UnmountComponent />
			<div className='color'>
				<h2>Hook_3, the component is updated in console after 3 seconds</h2>
				<ComponentUpdate name='John' />
			</div>
		</div>
	);
};

export default App;
