import { motion } from "framer-motion"
import { useState } from "react"

import { useIsSmall } from "../utils/useMediaQuery"

import portfolio_banner from "../assets/projects/portfolio/banner.jpg"
import wedding_banner from "../assets/projects/wedding/banner.jpg"
import architect_banner from "../assets/projects/architect/banner.jpg"

interface HomeProps {}
interface smallVariantProps { translateX: string }
interface labelVariantProps { y: string, x: string }

export const Home = ({  }: HomeProps) => {
	const [ projectSelected, setProjectSelected ] = useState(0)
	const [ prevProjectId, setPrevProjectId ] = useState(3)
	const [ nextProjectId, setNextProjectId ] = useState(1)
	const [ prevOnHover, setPrevOnHover ] = useState(false)
	const [ nextOnHover, setNextOnHover ] = useState(false)
	const isSmall = useIsSmall()

	const variants = {
		small: ({ translateX }: smallVariantProps) => ({
			width: 120,
			height: 120,
			opacity: 1,
			translateX: translateX,
			y: isSmall ? "calc(50vh - -60px)" : "50%",
			transition: {
				duration: 0.8,
				opacity: { delay: 0.8 }
			}
		}),
		main: {
			width: isSmall ? "30vh" : 320,
			height: isSmall ? "50vh" : "80vh",
			x: isSmall ? "50%" : "calc(0vw + 0px)",
			y: isSmall ? "30%" : "50%"
		},
		hidden: {
			opacity: 0,
			transition: {
				delay: 0.2,
				duration: 0.4,
				opacity: { delay: -2 }
			}
		}
	}

	const label_variants = {
		initial: ({ y }: labelVariantProps) => ({
			y: y,
			x: 0,
		}),
		hover: ({ y, x }: labelVariantProps) => ({
			y: y,
			x: x
		})
	}

	const label_transition = {
		duration: .3,
		ease: "easeInOut",
		// delay: .6
	}

	const projectData = [
		{
			id: 0,
			name: "Portfolio",
			bg: "green",
			image: portfolio_banner
		},
		{
			id: 1,
			name: "Wedding",
			bg: "pink",
			image: wedding_banner
		},
		{
			id: 2,
			name: "Architect",
			bg: "blue",
			image: architect_banner
		},
		{
			id: 3,
			name: "Architect",
			bg: "orange",
			image: architect_banner
		}
	]

	const nextProject = () => {
		setPrevProjectId(projectSelected)
		
		if (projectSelected +1 < projectData.length) {
			setProjectSelected(projectSelected + 1)
		} else {
			setProjectSelected(0)
		}

		if (projectSelected +2 < projectData.length) {
			setNextProjectId(projectSelected + 2)
		} else {
			setNextProjectId(projectSelected - 2)
		}
	}

	const prevProject = () => {
		setNextProjectId(projectSelected)

		if (projectSelected === 0) {
			setProjectSelected(projectData.length -1)
			setPrevProjectId(projectData.length - 2)
		} else {
			setProjectSelected(projectSelected - 1)

			if (projectSelected - 1 === 0) {
				setPrevProjectId(projectData.length -1)
			} else {
				setPrevProjectId(projectSelected - 2)
			}
		}
	}

	const getProjectVariantsData = (id : number) => {
		if (projectSelected - 1 === id || (id === projectData.length -1 && projectSelected === 0)) {
			return [{ translateX: "calc(-50vw - -60px)" }, "prev"]
		}
		if (projectSelected + 1 === id || (projectSelected === projectData.length -1 && id === 0)) {
			return [{ translateX: "calc(50vw + 60px)" }, "next"]
		}
		return [{ opacity: 0 }]
	}

	const renderProjectCard = () => (
		projectData.map(project => {
			const [i, whereGo] = getProjectVariantsData(project.id)
			return (
				<motion.div
					className={`ProjectCard ${projectSelected === project.id && "main"}`}
					key={project.id}
					custom={i}
					animate={projectSelected === project.id ? "main" : (whereGo ? "small" : "hidden")}
					variants={variants}
					onClick={() => whereGo === "prev" ? prevProject() : (whereGo === "next" ? nextProject() : null)}
					transition={{ duration: 1 }}
					onHoverStart={() => { (whereGo === "next") && setNextOnHover(true); (whereGo === "prev") && setPrevOnHover(true) }}
					onHoverEnd={() => { (whereGo === "next") && setNextOnHover(false); (whereGo === "prev") && setPrevOnHover(false) }}
				>
					<motion.img 
						src={project.image} 
						alt="" 
						variants={{
							small: { filter: `blur(4px)` },
							main: { filter: `blur(0px)` }
						}}
					/>
				</motion.div>
			)
		})
	)

	const renderPrevLabel = () => (
		<div className="ProjectLabel ProjectLabel--prev">
			<motion.div 
				custom={{ y: - (prevProjectId * 24), x: 10 }}
				animate={ prevOnHover ? "hover" : "initial" }
				variants={label_variants}
				transition={label_transition}
			>
				{projectData.map(project => (<p className="ProjectLabel__text">{project.name}</p>))}
			</motion.div>
		</div>
	)

	const renderNextLabel = () => (
		<div className="ProjectLabel ProjectLabel--next">
			<motion.div 
				custom={{ y: - (nextProjectId * 24), x: -10 }}
				animate={ nextOnHover ? "hover" : "initial" }
				variants={label_variants}
				transition={label_transition}
			>
				{projectData.map(project => (<p className="ProjectLabel__text">{project.name}</p>))}
			</motion.div>
		</div>
	)

	return (
		<main className="Home">
			{renderProjectCard()}
			{renderPrevLabel()}
			{renderNextLabel()}
		</main>
	)
}

export default Home;