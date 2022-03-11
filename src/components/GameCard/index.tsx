import './GameCard.scss'

interface GameCardProps {
  serie?: string
  image: string
  status: "hidden" | "shown"
  onClick: () => void
  disabled: boolean
}

export const GameCard = ({ serie, image, status, onClick, disabled }: GameCardProps) => {
  return (
    <button className={`GameCard ${status}`} onClick={onClick} disabled={disabled}>
      <div className='GameCard__inner'>
        <div className='GameCard__front'>
          <img src={serie} alt="" />
        </div>
        <div className='GameCard__back'>
          <img src={image} alt="" />
        </div>
      </div>
    </button>
  )
}