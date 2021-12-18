import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import '../../styles/globals.scss'
import './PageSwitch.scss';

interface PageSwitchProps {
	// user?: {};
}

export const PageSwitch = ({  }: PageSwitchProps) => {
	const location = useLocation();
	const { t } = useTranslation()
	const links = [
		{
			label: t("menu.projects"),
			url: "/"
		},
		{
			label: t("menu.about"),
			url: "/about"
		}
	]
	
	const transition = { 
		duration: .5,
		ease: [0.37, 0, 0.63, 1]
	}
	const variants = {
		home: {
			x: 0,
		},
		about: {
			x: "100%",
		}
	}

	return (
		<div className="PageSwitch">
			{links.map(link => (
				<NavLink 
					key={link.label}
					to={link.url}
					className={`Link ${location.pathname === link.url && "selected"}`}
				>
					{link.label}
				</NavLink>
			))}
			
			<motion.div 
				className="PageSwitch__bg"
				animate={location.pathname === "/" ? "home" : "about"}
				variants={variants}
				transition={transition}
			/>
		</div>
	)
}

export default PageSwitch;