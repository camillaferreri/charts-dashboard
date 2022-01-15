import { useState } from "react"
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import PageSwitch from '../PageSwitch/PageSwitch'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import MenuToggle from "../MenuToggle/MenuToggle"
import Contacts from "../Contacts/Contacts"

import { bg_transition, bg_variants, content_variants, content_children_variants, text_variants } from "./animations"

import './Header.scss'
import '../../styles/globals.scss'

interface HeaderProps {
}

export const Header = ({  }: HeaderProps) => {
	const location = useLocation();
	let [ isClose, setIsClose ] = useState(true)
	
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

				<motion.p variants={text_variants}>Camilla Ferreri</motion.p>

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
						<Contacts />
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