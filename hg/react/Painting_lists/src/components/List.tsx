import ListItem from './ListItem';

interface ListProps {
	tasks: string[];
	removeTask: (index: number) => void;
}

const List: React.FC<ListProps> = ({ tasks, removeTask }) => {
	return (
		<ul>
			{tasks.map((task, index) => (
				<ListItem key={index} task={task} onRemove={() => removeTask(index)} />
			))}
		</ul>
	);
};

export default List;
