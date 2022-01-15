import { motion } from 'framer-motion'

import './MenuToggle.scss'
import '../../styles/globals.scss'

interface MenuToggleProps {
	isClose: boolean, 
	toggleClose: () => void
}
  
export const MenuToggle = ({ isClose, toggleClose }: MenuToggleProps) => {

	return (
		<button className="MenuToggle" onClick={toggleClose}>
			<svg width="16" height="16" viewBox="0 0 16 16">
				<motion.path 
					variants={{
						close: {
							d: "M 2.5 2.5 L 13.5 2.5"
						},
						open: {
							d: "M 2.70709 2 L 13 12.2929"
						},
					}}
					strokeWidth="1"
					stroke="#393939" 
					strokeLinecap="round"
					transition={{ duration: 0.3 }}
				/>

				<motion.path 
					d="M 2.5 7.5 H 13.5"
					stroke="#393939" 
					strokeLinecap="round"
					strokeWidth="1"
					variants={{
						close: { opacity: 1 },
						open: { opacity: 0 }
					}}
					transition={{ duration: 0.3 }}
				/>

				<motion.path 
					variants={{
						close: { 
							d: "M 2.5 12.5 L 7.5 12.5"
						},
						open: { 
							d: "M 3 12.2929 L 13.2929 2"
						}
					}}
					strokeWidth="1"
					stroke="#393939" 
					strokeLinecap="round"
					transition={{ duration: 0.3 }}
				/>
			</svg>
		</button>
	)
}

export default MenuToggle;