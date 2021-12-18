import { motion } from "framer-motion"
import { useState } from "react"

interface HomeProps {
	
}
interface smallVariantProps {
    opacity: number,
    translateX: string,
}

export const Home = ({  }: HomeProps) => {
    const [ projectSelected, setProjectSelected ] = useState(0)

    const variants = {
        small: ({ opacity, translateX }: smallVariantProps) => ({
            width: 120,
            height: 120,
            opacity: 1,
            translateX: translateX,
            transition: {
                duration: 0.8,
                opacity: { delay: 0.8 }
            }
        }),
        main: {
            width: 320,
            height: "80vh",
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.8,
                opacity: { delay: -0.8 }
            }
        }
    }

    const projectData = [
        {
            id: 0,
            name: "Portfolio",
            bg: "green"
        },
        {
            id: 1,
            name: "Wedding",
            bg: "pink"
        },
        {
            id: 2,
            name: "Architect",
            bg: "blue"
        },
        {
            id: 3,
            name: "Architect",
            bg: "orange"
        }
    ]

    const nextProject = () => {
        if (projectSelected +1 < projectData.length) {
            setProjectSelected(projectSelected + 1)
        } else {
            setProjectSelected(0)
        }
    }

    const prevProject = () => {
        if (projectSelected === 0) {
            setProjectSelected(projectData.length -1)
        } else {
            setProjectSelected(projectSelected - 1)
        }
    }

    const getProjectVariantsData = (id : number) => {
        if (projectSelected - 1 === id || (id === projectData.length -1 && projectSelected === 0)) {
            return [{ opacity: 1, translateX: "calc(-50vw - -60px)" }, "prev"]
        }
        if (projectSelected + 1 === id || (projectSelected === projectData.length -1 && id === 0)) {
            return [{ opacity: 1, translateX: "calc(50vw + 60px)" }, "next"]
        }
        return [{ opacity: 0 }]
    }

    return (
        <main className="Home">
            {projectData.map(project => {
                const [i, whereGo] = getProjectVariantsData(project.id)
                
                return (
                    <motion.div
                        className="ProjectCard"
                        key={project.id}
                        custom={i}
                        animate={projectSelected === project.id ? "main" : (whereGo ? "small" : "hidden")}
                        variants={variants}
                        onClick={() => whereGo === "prev" ? prevProject() : (whereGo === "next" ? nextProject() : null)}
                        transition={{
                            duration: 1,
                        }}
                        style={{
                            backgroundColor: project.bg,
                            translateY: "-50%"
                        }}
                    />
                )
            })}
        </main>
    )
}

export default Home;