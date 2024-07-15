import Description from "../elements/Description"
import PhotoProfile from "../elements/PhotoProfile"

const IntroContent = () => {
    return (
        <div className="flex py-24">
            <Description variant = "md:w-[55%] mt-[-70px] px-12 md:mt-[10px] "></Description>
            <PhotoProfile></PhotoProfile>
        </div>
    )
}

export default IntroContent