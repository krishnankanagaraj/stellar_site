import About from "../components/About"
import Herosection from "../components/Herosection"
import Products from "../components/Products"
import Services from "../components/Services"
import TeamSection from "../components/TeamSection"

const HomePage = () => {
  return (
    <>
      <Herosection/>
      <About/>
      <Services/>
      <Products/>
      <TeamSection/>
    </>
  )
}

export default HomePage