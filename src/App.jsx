import './App.css'
import logo from './assets/img/logo.png'
import footerlogo from './assets/img/logo (1).png'
import bcfooter from './assets/img/footer-bg.png'
import group from './assets/img/Group 169.svg'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import TravelWithUs from './Pages/TravelWithUs'
import Footer from './components/Footer/Footer'
import list from './assets/img/Icon.svg'
import NavBar from './components/NavBar/NavBar'
import menubar from './assets/img/Menu (1).svg'
import close from './assets/img/Group.jpg'

const menu =[
  {
    title:"" ,
    path:" /"  ,
  },
  {
    title:"Home" ,
    path:"/",
  },
  {
    title:"About" ,
    path:"/about",
  },
  {
    title:"TravelWithUs" ,
    path:"/travel",
  },
  {
    title:"Servises" ,
    path:"/servises",
  },

];


function App() {
  return (
    
    <>
      <NavBar logo={logo} menu={menu} btn="Get in Touch" menubar={menubar} close={close} />
        <Routes>
          <Route path= '/'  element={<HomePage/>}   />
          <Route path= '/about/'  element={<AboutPage/>}   />
          <Route path= '/travel'  element={<TravelWithUs/>}   />
        </Routes>
      <Footer fimage={bcfooter} smLogo={footerlogo}  part1="Travel helps companies manage payments easily." group={group}ftitle="Company" menu1={["About Us" , "Careers" , "Blog " , "Pricing"]} stitle="Destinations" menu2={[ "Maldives" , "Los Angelas" , "Las Vegas " , "Torronto"]}  end="Copyright @ Xpro 2023 All Rights Reserved."  />
        </>
  )}
export default App