interface AddTaskButtonProps {
	onClick: () => void;
}

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
	return <button onClick={onClick}>Add Task</button>;
};
