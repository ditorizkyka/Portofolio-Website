import { useEffect, useState } from "react"
import CompetenciesData from "../../data/CompetenciesData"
import CardCompentencies from "../elements/CardCompentencies"

const Compentencies = () => {
    const [cData, setCData] = useState([])
    

    useEffect(() => {
        setCData(CompetenciesData())
    },[])
    console.log(cData)

    // const cData = CardCompentencies()

    return (
        <div className="bg-slate-200">
            <div className="w-full mt-[-20px] h-fit z-31 p-16 rounded-3xl bg-black">
                <div className="flex ">
                    <h1 className="font-title font-bold text-slate-100 text-[30px]">Compentencies</h1>
                </div>
                <div className="mt-4">
                        <span className="bg-greenL-0 px-3 font-Inter text-sm py-0.5">Hard Skills</span>
                </div>
                <div className="grid grid-cols-1 mt-7  md:grid-cols-4 gap-3">
                    {cData.map((cData) => (
                        <CardCompentencies key={cData.title} title={cData.title} desc={cData.desc} icon={cData.icon}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Compentencies