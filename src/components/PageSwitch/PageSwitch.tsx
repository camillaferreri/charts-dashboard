import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import '../../styles/globals.scss'
import './PageSwitch.scss';

interface PageSwitchProps {
	location: string
}

export const PageSwitch = ({ location }: PageSwitchProps) => {
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
					className={`Link ${location === link.url && "selected"}`}
				>
					<motion.span whileHover={{ scale: 1.05 }}>{link.label}</motion.span>
				</NavLink>
			))}
			
			<motion.div 
				className="PageSwitch__bg"
				animate={location === "/" ? "home" : "about"}
				variants={variants}
				transition={transition}
			/>
		</div>
	)
}

export default PageSwitch;