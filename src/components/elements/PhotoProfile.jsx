const PhotoProfile = () => {
    return (
        <>
            <div className="z-0 w-[300px] h-[300px] rounded-full bg-gradient-to-t from-slate-700 to-greenL-0 absolute mx-[61.3%] md:block hidden mt-[-10px] ">
                {/* <img src="public/img/ProfileAndito.png" className="md:block hidden mt-[-140px] scale-100" alt=""/> */}
                <div className="">
                    <img src="public/img/ProfileAndito.png" className="md:block hidden mt-[-135px] scale-95" alt=""/>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-200 to-transparent"></div>
                </div>  
                {/* <div className="z-20 w-[210px] h-[90px] rounded-b-full absolute  mt-[-50px] mx-11 bg-gradient-to-b from-slate-700 to-greenL-0"></div> */}
            </div>
            {/* <div className="z-2  mt-[-220px] absolute mx-[35%] ">
                <img src="public/img/ProfileAndito.png" className="md:block hidden" alt=""/>
            </div> */}
        </>
    )
}
export default PhotoProfile;