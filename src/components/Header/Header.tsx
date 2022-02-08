import { useLocation } from "react-router-dom"

import { NavLink } from "../NavLink/NavLink"
import { NavButton } from "../NavButton/NavButton"

import './Header.scss'
import '../../styles/globals.scss'

interface HeaderProps {}

export const Header = ({  }: HeaderProps) => {
	const location = useLocation()

	const leftButtons = [
		{ 
			label: "Recensioni",
			url: "/#",
			active: true
		},
		{ 
			label: "Sondaggi >",
			url: "/#",
		},
	]

	const rightLinks = [
		{ 
			label: "Home",
			url: "/",
			icon: "/nav/home.jpg"
		},
		{ 
			label: "Recensioni",
			url: "/#",
			icon: "/nav/recensioni.jpg"
		},
		{ 
			label: "Luoghi",
			url: "/#",
			icon: "/nav/luoghi.jpg"
		},
		{ 
			label: "Competitors",
			url: "/#",
			icon: "/nav/competitors.jpg"
		},
		{ 
			label: "Fonti",
			url: "/#",
			icon: "/nav/fonti.jpg"
		},
		{ 
			label: "Grafo",
			url: "/#",
			icon: "/nav/grafo.jpg"
		},
		{ 
			label: "Analisi avanzata",
			url: "/analisi-avanzata",
			icon: "/nav/analisi-avanzata.jpg"
		},
		{ 
			// settings
			url: "/#",
			icon: "/nav/settings.jpg"
		},
		{ 
			// login
			url: "/#",
			icon: "/nav/login.jpg"
		},
	]

	const renderLeftButtons = () => (
		leftButtons.map(link => (
			<NavButton 
				label={link.label}
				url={link.url}
				active={link.active}
			/>
		))
	)

	const renderRightLinks = () => (
		rightLinks.map(link => (
			<NavLink 
				label={link.label}
				url={link.url}
				icon={link.icon}
				active={link.url === location.pathname}
			/>
		))
	)

	return (
		<nav className="Header">
			<div className="Header__leftLinks">
				<img src="/logo.png" className="logo" alt="" />
				{renderLeftButtons()}
			</div>

			<div className="Header__rightLinks">
				{renderRightLinks()}
			</div>
		</nav>
	)
}

export default Header;