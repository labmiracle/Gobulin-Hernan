type TextDisplayProps = {
	text: string;
};

const TextDisplay = ({ text }: TextDisplayProps) => {
	return <p>{text}</p>;
};

export default TextDisplay;
