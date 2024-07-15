/* eslint-disable react/prop-types */


const Card = (props) => {
    const {title,job,desc,img} = props
    return (
        <div className="card hover:shadow-lg bg-white rounded-lg">
            <img src={img} alt="" className="w-full h-24 sm:h-48 object-cover rounded-t-lg"/>
            <div className="">
                <div className="m-4">
                    <h1 className="font-title font-bold">{title}</h1>
                    <span className="block text-gray-500 font-bold text-sm">{job}</span>
                    <span className="text-sm text-gray-500">{desc}</span>
                </div>
            </div>
        </div> 
    )
}

export default Card;