import React from 'react'
import Hero from '../components/Hero/Hero'
import bgimg from './../assets/img/header-bg.png'
import Title from '../components/Title/Title'
import ContainerCat from '../components/ContainerCat/ContainerCat'
import Cards from '../components/Cards/Cards'
import Promotion from '../components/Promotion/Promotion'
import ProCards from '../components/ProCards/ProCards'
import Trending from '../components/Trending/Trending'
import TrenCards from '../components/TrenCards/TrenCards'




const HomePage = () => {
  return (
    <div>
        <Hero image={bgimg} description="No Matter Where You're Going To ,  We'll Take You There" />
        <Title title1="CATEGORY" title2="We Offer Best Services" />
        <ContainerCat>
          <Cards/>
        </ContainerCat>
        <Promotion>
          <ProCards/>
        </Promotion>
        <Title title1="trendy" title2="Our Trending Tour Packages" />
        <Trending>
          <TrenCards/>
        </Trending>
    </div>
  )
}

export default HomePage