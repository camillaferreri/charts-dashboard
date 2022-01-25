import { motion } from "framer-motion"
import { useState } from "react"

import { useIsSmall } from "../../utils/useMediaQuery"
import { project_card_variants, project_card_transition, label_variants, label_transition } from "./animations"

import portfolio_banner from "../../assets/projects/portfolio/banner.jpg"
import wedding_banner from "../../assets/projects/wedding/banner.jpg"
import architect_banner from "../../assets/projects/architect/banner.jpg"

interface HomeProps {}

export const Home = ({  }: HomeProps) => {
	const [ projectSelected, setProjectSelected ] = useState(0)
	const [ prevProjectId, setPrevProjectId ] = useState(3)
	const [ nextProjectId, setNextProjectId ] = useState(1)
	const [ prevOnHover, setPrevOnHover ] = useState(false)
	const [ nextOnHover, setNextOnHover ] = useState(false)
	const isSmall = useIsSmall()

	const projectData = [
		{
			id: 0,
			name: "Portfolio",
			image: portfolio_banner
		},
		{
			id: 1,
			name: "Wedding",
			image: wedding_banner
		},
		{
			id: 2,
			name: "Architect",
			image: architect_banner
		},
		{
			id: 3,
			name: "Architect",
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
			return [{ translateX: "calc(-50vw - -60px)", isSmall }, "prev"]
		}
		if (projectSelected + 1 === id || (projectSelected === projectData.length -1 && id === 0)) {
			return [{ translateX: "calc(50vw + 60px)", isSmall }, "next"]
		}
		return [{ opacity: 0, isSmall }]
	}

	const renderProjectCard = () => (
		projectData.map(project => {
			const [i, whereGo] = getProjectVariantsData(project.id)
			return (
				<motion.div
					key={project.id}
					className={`ProjectCard ${projectSelected === project.id && "main"}`}
					custom={i}
					animate={projectSelected === project.id ? "main" : (whereGo ? "small" : "hidden")}
					variants={project_card_variants}
					transition={project_card_transition}
					onClick={() => whereGo === "prev" ? prevProject() : (whereGo === "next" ? nextProject() : null)}
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