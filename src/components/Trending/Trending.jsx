import React from 'react'
import './TrendingStyle.css'
import TrenCards from '../TrenCards/TrenCards'
import Switz from './../../assets/img/n1.png'
import Amazon from './../../assets/img/n2.png'
import Giza from './../../assets/img/n3.png'
import trcard1 from './../../assets/img/Group 1000001775.svg'
import trcard2 from './../../assets/img/Group 1000001775 (1).svg'
import trcard3 from './../../assets/img/Group 1000001775 (2).svg'
import one from './../../assets/img/Ellipse 623.png'
import two from './../../assets/img/Ellipse 623 (1).png'
import three from './../../assets/img/Ellipse 625.png'
import star1 from './../../assets/img/bi_star-fill.png'
import star2 from './../../assets/img/bi_star-fill.png'
import star3 from './../../assets/img/bi_star-fill.png'
import star4 from './../../assets/img/bi_star-fill.png'
import star5 from './../../assets/img/bi_star-fill.png'

const Trending = () => {
  let threeCards =   [{
    conImg:Switz,
    simg : one,
    trcard : trcard1,
    count : "Swizerland",
    star1: star1,
    star2: star2,
    star3: star3,
    star4: star4,
    star5: star5,
    definetion:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    btn:"Explore Now",
},{
    
    conImg:Amazon,
    simg : two,
    trcard : trcard2,
    count:"Amazon",
    star1: star1,
    star2: star2,
    star3: star3,
    star4: star4,
    star5: star5,
    definetion:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    btn:"Explore Now",
},{
    
  conImg:Giza,
  simg : three,
  trcard : trcard3,
  count:"Giza",
  star1: star1,
  star2: star2,
  star3: star3,
  star4: star4,
  star5: star5,
  definetion:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
  btn:"Explore Now",
},

]
return (
  <div className='TrenCards'>
      {threeCards.map((element , index)=> {return(
          <TrenCards key={index} conImg={element.conImg} trcard={element.trcard} count={element.count} star1={element.star1} star2={element.star2} star3={element.star3} star4={element.star4} star5={element.star5} definetion={element.definetion}
          btn={element.btn} simg={element.simg} />
      )})}
  </div>
)
}

export default Trending

