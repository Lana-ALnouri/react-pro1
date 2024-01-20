import Hero from "../components/Hero/Hero"
import Travel from './../assets/img/packages-bg.png'
import CCountry from '../components/CCountry/CCountry'
import Country from "../components/Country/Country"



const TravelWithUs = () => {
  return (
    <div>
        <Hero image={Travel} description="Travel With Us" />
        <CCountry>
          <Country/>
        </CCountry>
    </div>
  )
}

export default TravelWithUs