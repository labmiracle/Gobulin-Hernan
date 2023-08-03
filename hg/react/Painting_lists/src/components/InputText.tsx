import { useState } from 'react';

interface InputTextProps {
	onSubmit: (task: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ onSubmit }) => {
	const [task, setTask] = useState('');

	const handleSubmit = () => {
		if (task.trim() !== '') {
			onSubmit(task);
			setTask('');
		}
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Enter task'
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add Task</button>
		</div>
	);
};

export default InputText;
