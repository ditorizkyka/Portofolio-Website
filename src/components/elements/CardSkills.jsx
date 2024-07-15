/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ButtonApp from "./Button"


const CardSkills = (props ) => {
    const {img, logo, title, desc , icon, source}= props
    return (
        <div className="hover:shadow-lg bg-white rounded overflow-hidden shadow-md relative mb-4 ">
                        <img src={img} alt="" className="w-full h-32 sm:h-48 object-cover"/>
                        <div className="">
                            <div className="m-4">
                                <img src={logo} alt="" className="w-32 ml-[-5px]"/>
                                <span className="block text-gray-500 font-bold text-sm">{title}</span>
                                <span className="text-sm text-gray-500">{desc}</span>
                            </div>
                            
                            <div className="border-t-black border-0 bg-black bg-transparent px-4">
                                <div className="font-tittle text-sm text-slate-100">
                                    <span className=" py-0.5 text-black underline decoration-greenL-0">Technology Used :</span>
                                </div>
                                <div className="flex justify-normal mr-2 py-3">
                                    {icon.map((i) => (
                                        <img src={i} alt="" className="w-8 mr-2" key={title}/>
                                    ))}

                                </div>
                            </div>
                            
                            <ButtonApp variant="font-bold font-title text-xs text-slate-600 bg-slate-200 p-2 uppercase rounded-full absolute inline top-0 right-2 ml-2 mt-2">
                                <a href={source}>Source</a></ButtonApp> 
                        </div>
                    </div>
    )
}
export default CardSkills