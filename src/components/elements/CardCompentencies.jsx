/* eslint-disable react/prop-types */


const CardCompentencies = (props) => {
    const {title,desc,icon} = props
    return (
        <div className="bg-slate-100 grid grid-cols-3 rounded-lg">
            <div className="p-2 bg-transparent col-span-1 m-auto">
                 <img src={icon} className="w-10" alt=""/>
            </div>
            <div className=" p-2 col-span-2 overflow-auto">
                <h3 className="font-bold mt-[-5px] font-title">{title}</h3>
                <p className="text-[10px] font-Inter">{desc}</p>
            </div>

        </div>
    )
}

export default CardCompentencies;