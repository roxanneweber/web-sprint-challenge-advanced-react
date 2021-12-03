const baseURL = 'http://localhost:3333/plants';

const getPlantsURL = () => baseURL;

const getAllPlants = async () => {
	const res = await fetch(getPlantsURL());
	const plants = await res.json();
	return plants;
};

export default getAllPlants;
