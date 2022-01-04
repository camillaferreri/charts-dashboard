import { useState } from "react"
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import PageSwitch from '../PageSwitch/PageSwitch'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'

import openIcon from "../../assets/open-icon.svg"
import closeIcon from "../../assets/close-icon.svg"

import './Header.scss'
import '../../styles/globals.scss'
import MenuToggle from "../MenuToggle/MenuToggle"

interface HeaderProps {
}

export const Header = ({  }: HeaderProps) => {
	const location = useLocation();
	let [ isClose, setIsClose ] = useState(true)

	const bg_transition = { 
		duration: .5,
		ease: [0.37, 0, 0.63, 1]
	}
	
	const bg_variants = {
		close: { scale: 1 },
		open: { scale: 75 }
	}

	const content_variants = {
		close: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 }
		},
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 }
		}
	}

	const content_children_variants = {
		close: {
			opacity: 0
		},
		open: {
			opacity: 1
		}
	}

	return (
		<nav className="Header">
			<div className="Header--desktop">
				<div className="container container--large">
					<LanguageSwitch />

					<p>Camilla Ferreri</p>

					<PageSwitch location={location.pathname} />
				</div>
			</div>

			<motion.div className="Header--mobile" animate={isClose ? "close" : "open"}>
				<motion.div 
					className="Header__bg"
					variants={bg_variants}
					transition={bg_transition}
				/>

				<p>Camilla Ferreri</p>

				{/* <button className="Header__button" onClick={() => setIsClose(!isClose)}>
					<img src={isClose ? openIcon : closeIcon} alt="" />
				</button> */}
				
				<MenuToggle 
					isClose={isClose} 
					toggleClose={() => setIsClose(!isClose)}
				/>

				<motion.div
					className="Header__content"
					variants={content_variants}
				>
					<motion.div 
						className="Header__contacts"
						variants={content_children_variants}
					>
						<p>hi</p>
					</motion.div>

					<motion.div 
						className="Header__bottomLine"
						variants={content_children_variants}
					>
						<LanguageSwitch />
						<PageSwitch location={location.pathname} />
					</motion.div>
				</motion.div>
			</motion.div>
		</nav>
	)
}

export default Header;