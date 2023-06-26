import React, { useState } from 'react';

const SelectComponent: React.FC = () => {
	const [selectedValue, setSelectedValue] = useState('');

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div>
			<select value={selectedValue} onChange={handleSelectChange}>
				<option value=''>Select an option</option>
				<option value='option1'>Option 1</option>
				<option value='option2'>Option 2</option>
				<option value='option3'>Option 3</option>
			</select>
			{selectedValue && <p>Selected Value: {selectedValue}</p>}
		</div>
	);
};

export default SelectComponent;
