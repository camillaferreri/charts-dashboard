import { MouseEventHandler } from 'react';
import './IconButton.scss'
import '../../styles/globals.scss'

interface IconButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>
	icon: string
	size?: string
}

export const IconButton = ({ onClick, icon, size }: IconButtonProps) => {
	return (
		<button 
			className={`IconButton ${size && `IconButton--${size}`}`}
			onClick={onClick}
		>
			<img src={icon} alt="" />
		</button>
	)
}

export default IconButton;