import RemoveTaskButton from './RemoveTaskButton';

interface ListItemProps {
	task: string;
	onRemove: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ task, onRemove }) => {
	return (
		<li>
			<span>{task}</span>
			<RemoveTaskButton onClick={onRemove} />{' '}
		</li>
	);
};

export default ListItem;
