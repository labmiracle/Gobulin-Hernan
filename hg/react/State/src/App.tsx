import Counter from './components/Counter';
import StringManipulator from './components/StringManipulator';
import CounterRefactored from './components/CounterRefactored';
import './App.css';

const App = () => {
	return (
		<div>
			<Counter />
			<StringManipulator />
			<CounterRefactored />
		</div>
	);
};

export default App;
