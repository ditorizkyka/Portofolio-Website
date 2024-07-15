import Header from "../fragments/header";
import IntroContent from "../fragments/IntroContent";


const Introduction = () => {
    return (
        <div className="px-12 z-30 bg-slate-200 rounded-t-3xl pb-32">
            <Header></Header>
            <IntroContent></IntroContent>
        </div>
    )
}

export default Introduction;