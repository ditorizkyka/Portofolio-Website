/* eslint-disable react/prop-types */
const ButtonApp = (props) => {
    const { children = "Click", variant} = props
    return (
            <button className={`rounded-full font-semibold bg-gray-950 h-10 px-5 ${variant} cursor-pointer text-slate-100 text-sm`}>
                {children}
            </button>   
        
    )
}

export default ButtonApp;