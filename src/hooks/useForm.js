import { useState } from 'react';

const useForm = (initialState) => {
	const [values, setValues, setAlert] = useState(initialState);

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return [values, handleChanges];
};

export default useForm;
