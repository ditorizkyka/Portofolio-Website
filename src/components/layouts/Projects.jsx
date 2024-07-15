import { useState } from "react"
import CardSkills from "../elements/CardSkills"
import Skills from "../../data/Skills"
import { useEffect } from "react"

const Projects = () => {
    const [projects, setDataProjects] = useState([])

    useEffect(() => {
        setDataProjects(Skills())
    }, [])

    console.log(projects)

    return (
        <div className="px-16 py-10 bg-slate-200">
            <div className="md:w-[50%] ">
                <h1 className="mt-16 leading-[43px] font-title font-bold text-black text-[45px] ">Skills is nothing without <span className="underline decoration-greenL-0">Projects</span></h1>
                <p className="text-slate-500 text-lg leading-7 mt-6">Implementing skills in projects helps apply knowledge, gain practical experience, and showcase abilities to achieve real-world results and impact.</p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6 grid-cols-1 ">
                {projects.map((projects) => (
                    <CardSkills 
                    key={projects.title} 
                    logo={projects.logo} 
                    title={projects.title} 
                    desc={projects.desc} 
                    img={projects.img} 
                    icon={projects.icon}
                    source= {projects.source}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects