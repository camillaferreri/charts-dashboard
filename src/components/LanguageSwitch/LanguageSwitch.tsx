import { useState } from 'react'
import { motion } from 'framer-motion'
import i18n from "i18next"

import '../../styles/globals.scss'
import './LanguageSwitch.scss';

interface LanguageSwitchProps {}

export const LanguageSwitch = ({  }: LanguageSwitchProps) => {
	const [ isOpen, setIsOpen ] = useState(false)
	const languages = [ "it", "en" ]
	
	const transition = { 
		duration: .4,
		ease: "easeInOut"
	}

	const bgVariants = {
		initial: {
			bottom: 0
		},
		animate: {
			bottom: -38
		}
	}

	const changeLanguage = (selectedLanguage: string) => {
		i18n.changeLanguage(selectedLanguage, (err, t) => {
			if (err) return console.log('something went wrong loading', err);
			t('key');
		})
	}

	return (
		<motion.div 
			className={`LanguageSwitch ${isOpen && "LanguageSwitch--open"}`} 
			onClick={() => setIsOpen(!isOpen)}
			whileHover={{ scale: 1.05 }}
		>
			{languages.map(language => (
				<p
					key={language}
					className={`option ${i18n.language === language && "selected"}`}
					onClick={() => changeLanguage(language)}
				>{language}</p>
			))}
			
			<motion.div 
				className="LanguageSwitch__bg" 
				animate={isOpen ? "animate" : "initial"}
				variants={bgVariants}
				transition={transition}
				
			/>
		</motion.div>
	)
}

export default LanguageSwitch;