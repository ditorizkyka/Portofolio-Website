import { useEffect, useState } from "react"
import SocialActivitiesData from "../../data/SocialActivitiesData"
import Card from "../elements/Card"

const SocialActivities = () => {
    const [socialData, setSocialData] = useState([])

    useEffect(() => {
        setSocialData(SocialActivitiesData())
    }, [])

    return (
        <div className="p-16 bg-slate-200">
            <div className="md:w-[50%] ">
                <h1 className="mt-10 leading-[43px] font-title font-bold text-black text-[45px]"><span className="underline decoration-greenL-0">Social</span> Activities</h1>
                <p className="text-slate-500 text-lg leading-7 mt-6">Social activities is the most important things to build our soft-skills and networking.</p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6 grid-cols-1 ">
                {socialData.map((socialData) => (
                    <Card key={socialData.title} title={socialData.title} job={socialData.job} desc={socialData.desc} img={socialData.img} />
                ))}
            </div>
        </div>
    )
}

export default SocialActivities