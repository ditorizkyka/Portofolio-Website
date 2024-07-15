import ButtonApp from "../elements/Button"
import LogoBlack from "../elements/Logo"

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <LogoBlack></LogoBlack>
            <ButtonApp variant="">Contact me</ButtonApp>
        </div>
    )   
}

export default Header;