import { useState } from 'react';
import List from './List';
import InputText from './InputText';

const ListContainer = () => {
	const [tasks, setTasks] = useState<string[]>([]);

	const addTask = (task: string) => {
		setTasks([...tasks, task]);
	};

	const removeTask = (index: number) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(index, 1);
		setTasks(updatedTasks);
	};

	return (
		<div>
			<h2>To-do list</h2>
			<InputText onSubmit={addTask} />
			<List tasks={tasks} removeTask={removeTask} />{' '}
		</div>
	);
};

export default ListContainer;
