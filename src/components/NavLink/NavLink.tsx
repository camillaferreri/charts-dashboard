import './NavLink.scss'
import '../../styles/globals.scss'

interface NavLinkProps {
	label?: string
	url: string
	icon?: string
	active?: boolean
}

export const NavLink = ({ label, url, icon, active }: NavLinkProps) => {
	return (
		<a href={url} className={`NavLink ${active && "NavLink--active"}`}>
			{icon && <img src={icon} alt="" />}
			{label && <span>{label}</span>}
		</a>
	)
}

export default NavLink;