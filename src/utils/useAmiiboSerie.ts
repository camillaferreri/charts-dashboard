import { useState, useEffect } from "react"

import marioSportImage from "../assets/logos/mario-sport.png"
import animalCrossingImage from "../assets/logos/animal-crossing.png"
import pokemonImage from "../assets/logos/pokemon.png"

const useAmiiboSerie = (slug: string | undefined) => {
  const [ serie, setSerie ] = useState<string | undefined>(undefined);

  useEffect(() => {
    switch(slug) {
      case "Super Mario":
        setSerie(marioSportImage)
        break;
      case "Animal Crossing":
        setSerie(animalCrossingImage)
        break;
      case "Pokemon":
        setSerie(pokemonImage)
        break;
    }
  }, [ slug ]);

  return serie;
}

export default useAmiiboSerie