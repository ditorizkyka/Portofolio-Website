const Footer = () => {
    return (
            <div className="bg-slate-200">
                <footer className="bg-black rounded-t-[45px] h-fit md:px-24 px-20 pt-14 ">
                    <div className="container">
                        <div className="md:flex justify-around">

                            <div className="w-full  mb-10 text-slate-100 md:w-1/3">
                                <img src="/img/EDITEDLOGODITO.png" className="w-60 ml-[-25px]" alt=""/>
                                <h2 className="font-tittle text-slate-100 mt-4 text-lg">Contact Me</h2>
                                <div className="text-sm mt-3 text-slate-300">
                                    <p className="mb-1">rizkykandito@gmail.com</p>
                                    <p className="mb-1">Jln. Telekomunikasi, Buah Batu</p>
                                    <p className="mb-1">Bandung, Jawa Barat, Indonesia</p>
                                </div>
                            </div>

                            <div className="w-full mb-12 text-slate-100 md:w-1/3">
                                <h2 className="font-tittle text-slate-100 mt-4 text-lg">Categories</h2>
                                <div className="text-sm mt-3 text-slate-300">
                                    <p className="mb-1">Programming</p>
                                    <p className="mb-1">Projects</p>
                                    <p className="mb-1">Organization</p>
                                </div>
                            </div>

                            <div className="w-full mb-12 text-slate-100 md:w-1/3 h-80 md:h-0">
                                <h2 className="font-tittle text-slate-100 mt-4 text-lg">More About me</h2>
                                <div className="text-sm mt-3 text-slate-300 ">
                                    <p className="mb-1"><a href="#Introduction" className=" hover:text-greenL-0">Introduction</a></p>
                                    <p className="mb-1"><a href="#Competencies" className=" hover:text-greenL-0">Skills</a></p>
                                    <p className="mb-1"><a href="#Social" className=" hover:text-greenL-0">Social Experience</a></p>
                                    <p className="mb-1"><a href="#Projects" className=" hover:text-greenL-0">Projects</a></p>

                                </div>
                            </div>
                            
                        </div>
                    </div>


                </footer>
            </div>
        
    )
}

export default Footer;