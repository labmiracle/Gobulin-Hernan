type CounterButtonProps = {
	onClick: () => void;
	text: string;
};

const CounterButton = ({ onClick, text }: CounterButtonProps) => {
	return <button onClick={onClick}>{text}</button>;
};

export default CounterButton;
