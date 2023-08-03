interface RemoveTaskButtonProps {
	onClick: () => void;
}

const RemoveTaskButton: React.FC<RemoveTaskButtonProps> = ({ onClick }) => {
	return <button onClick={onClick}>Remove</button>;
};

export default RemoveTaskButton;
