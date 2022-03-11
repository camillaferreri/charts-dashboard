import { Link } from "react-router-dom";

import './GameSeriesCard.scss'

interface GameSeriesCardProps {
  slug: string
  name: string
  image: string
}

export const GameSeriesCard = ({ slug, name, image }: GameSeriesCardProps) => {
  return (
    <Link 
      to={`/game/${slug}`} 
      className="GameSeriesCard"
    >
      <img src={image} alt="" />
      <p>{name}</p>
    </Link>
  )
}