import React from 'react';

type CounterTextProps = {
	count: number;
};

const CounterText = ({ count }: CounterTextProps) => {
	return <p>{count}</p>;
};

export default CounterText;
