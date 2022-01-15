import { motion } from 'framer-motion'

import './Contacts.scss'
import '../../styles/globals.scss'

interface ContactsProps {
}
  
export const Contacts = ({  }: ContactsProps) => {
	const links = [
		{ label: "Mail", url: "mailto:ferreri.web@gmail.com" },
		{ label: "Github", url: "https://github.com/camillaferreri" },
		{ label: "Codepen", url: "https://codepen.io/camillaferreri" },
		{ label: "Instagram", url: "https://www.instagram.com/camillaferreri/" },
		{ label: "Twitter", url: "https://twitter.com/camillaferreri" }
	]

	const hover_variants = {
		hidden: { y: "-101%" },
		shown: { y: 0 }
	}

	const hover_transition = { duration: 0.4 }

	const hover_wrapper_variants = {
		hidden: { x: 0 },
		shown: { 
			x: "-50%", 
			transition: {
				duration: 3.5,
				repeat: Infinity,
				ease: "linear",
			} 
		}
	}

	const renderHoverLabels = (label: string) => {
		let length = [...Array(25).keys()]

		return length.map(item => (
			<span>{label}</span>
		))
	}

	return (
		<div className="Contacts">
			{links.map(link => (
				<motion.a 
					href={link.url} 
					className="Contacts__link"
					animate="hidden"
					whileHover="shown"
					target="_blank"
				>
					<motion.div 
						className="Contacts__hover"
						variants={hover_variants}
						transition={hover_transition}
					>
						<motion.div variants={hover_wrapper_variants}>
							{renderHoverLabels(link.label)}
							{/* <span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span>
							<span>{link.label}</span> */}
						</motion.div>
					</motion.div>

					<span>{link.label}</span>
				</motion.a>
			))}
		</div>
	)
}

export default Contacts;