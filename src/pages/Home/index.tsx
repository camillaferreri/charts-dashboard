import { GameSeriesCard } from "../../components/GameSeriesCard"

import marioSportImage from "../../assets/logos/mario-sport.png"
import animalCrossingImage from "../../assets/logos/animal-crossing.png"
import pokemonImage from "../../assets/logos/pokemon.png"

export const Home = () => {
	return (
		<main className="Home">
			<div className="container">
				<h1>Choose a game series</h1>
				
				<div className="GameSeriesWrapper">
					<GameSeriesCard
						slug="Super Mario"
						name="Mario Sports Superstars"
						image={marioSportImage}
					/>

					<GameSeriesCard
						slug="Animal Crossing"
						name="Animal Crossing"
						image={animalCrossingImage}
					/>

					<GameSeriesCard
						slug="Pokemon"
						name="Pokemon"
						image={pokemonImage}
					/>
				</div>
			</div>
		</main>
	)
}

export default Home;