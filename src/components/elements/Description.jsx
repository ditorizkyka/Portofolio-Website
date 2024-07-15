
const Description = (props) => {
    // eslint-disable-next-line react/prop-types
    const {variant} = props
    return (
        <div className={`${variant}`}>
            <h1 className="text-4xl font-bold font-title text-gray-950">
                Hi! Im Andito Rizkyka 
            </h1>
            <div className="flex w-10 pt-5 gap-3">
                <img src="/img/linkedin.png" alt="" />
                <img src="/img/github-sign.png" alt="" />
                <img src="/img/instagram.png" alt="" />
            </div>
            <div className="pt-5 text-slate-500">
                <p>{`I'm student of `}<span className="bg-greenL-0">Telkom University</span> majoring in informatics. 
                Experienced in social and many Committee/Organization . I’m Adaptable, Problem Solver , Creative , Critical Thinker and Dreamer. 
                </p>
            </div>
        </div>
    )
}

export default Description;