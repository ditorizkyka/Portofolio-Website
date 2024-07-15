import Compentencies from "./components/layouts/Compentencies"
import Footer from "./components/layouts/Footer"
import Introduction from "./components/layouts/Introduction"
import Projects from "./components/layouts/Projects"
import SocialActivities from "./components/layouts/SocialActivities"

function App() {
  return (
    <div className="bg-black ">
      <div className="h-2"></div>
      <Introduction></Introduction>
      <Compentencies></Compentencies>
      <SocialActivities></SocialActivities>
      <Projects></Projects>
      <Footer></Footer>
    </div>  
  )
}

export default App
