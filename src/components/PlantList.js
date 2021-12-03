import React, { Component } from 'react';
import axios from 'axios';

const getPlantData = () => {
	const data = axios.get('http://localhost:3333/plants');
	return data;
};

export default class PlantList extends Component {
	// add state with a property called "plants" - initialize as an empty array
	state = {
		plants: [
			{
				name: 'Peperomia Rosso',
				id: 143,
				scientificName: 'Peperomia caperata rosso',
				difficulty: 'easy',
				light: 'direct',
				img: 'https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590',
				sizes: ['small'],
				watering: 2,
				description:
					'Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.',
				price: 21,
			},
		],
	};

	componentDidMount() {
		getPlantData(this.state.plants).then((resp) => {
			console.log(resp.data);
		});
	}

	// when the component mounts:
	//   - fetch data from the server endpoint - http://localhost:3333/plants
	//   - set the returned plants array to this.state.plants

	/*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
	render() {
		return (
			<main className='plant-list'>
				{this.state.plants.map((plant) => (
					<div className='plant-card' key={plant.id} data-testid='plant-card'>
						<img className='plant-image' src={plant.img} alt={plant.name} />
						<div className='plant-details'>
							<h2 className='plant-name'>{plant.name}</h2>
							<p className='plant-scientific-name'>{plant.scientificName}</p>
							<p>{plant.description}</p>
							<div className='plant-bottom-row'>
								<p>${plant.price}</p>
								<p>☀️ {plant.light}</p>
								<p>💦 {plant.watering}x/month</p>
							</div>
							<button
								className='plant-button'
								onClick={() => this.props.addToCart(plant)}
							>
								Add to cart
							</button>
						</div>
					</div>
				))}
			</main>
		);
	}
}
