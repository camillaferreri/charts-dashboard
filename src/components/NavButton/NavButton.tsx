import './NavButton.scss'
import '../../styles/globals.scss'

interface NavButtonProps {
	label?: string
	url: string
	icon?: string
	typeButton?: boolean
	active?: boolean
}

export const NavButton = ({ label, url, active }: NavButtonProps) => {
	return (
		<a 
			href={url}
			className={`NavButton ${active && "NavButton--active"}`}
		>
			{label}
		</a>
	)
}

export default NavButton;