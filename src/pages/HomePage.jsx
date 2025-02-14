import About from "../components/About"
import BackToTop from "../components/BackToTop"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
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
      <ContactUs/>
      <Footer/>
      <BackToTop />
    </>
  )
}

export default HomePage