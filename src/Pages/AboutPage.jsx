import Hero from "../components/Hero/Hero"
import aboutUs from './../assets/img/about-bg.png'
import Reverse from '../components/Reverse/Reverse'
import ProCircle from '../components/ProCircle/ProCircle'
import Circle from './../assets/img/promotion_img.png'
import Wanderlust from '../components/Wanderlust/Wanderlust'
import Tour from './../assets/img/TourPlans-img.png'
import video from './../assets/img/video-banner.png'
import clickbtn from './../assets/img/video-play.svg'
import plans from './../assets/img/Group 1000001814.svg'



const AboutPage = () => {
  return (
    <div>
        <Hero image={aboutUs} description="About Us" />
        <Reverse>
            <ProCircle title1="Trend" title2="Our Popular Tour Plans" description="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium."  btn="View Packages"  />
            <ProCircle image={Circle} />
        </Reverse>
        <Wanderlust girlimage={video} text="Wanderlust" Clickbtn={clickbtn} />
        <Reverse>
            <ProCircle image={Tour}  />
            <ProCircle title1="Trend" title2="Our Popular Tour Plans" description="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium."  plans={plans}  />
        </Reverse>
    </div>
  )
}

export default AboutPage