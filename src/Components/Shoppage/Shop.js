import React from 'react'
import Navs from '../Navs'
import Main from '../../Main'
import { Link } from 'react-router-dom'
import { BiRightArrowAlt } from "react-icons/bi";
import './Shop.css'
import Shoptwo from './Shoptwo';
import Paginations from '../Paginations'
import Fifthpage from '../Fifthpage';
import Footer from '../Footer';
// import Mousehover from './Mousehover'

const Shop = () => {
  return (
    <div >
        <Navs/>
        <div  style={{textAlign:"center",color:"white",marginTop:"60px"}} className='shopb'>

       <div style={{paddingTop:"50px"}}>
       <h1>Shop Category Page</h1>
        
        <Link to="/"  style={{color:"white", textDecoration:"none"}}>Home<BiRightArrowAlt style={{margin:"0px"}}/></Link>
       <Link to="/" style={{color:"white",textDecoration:"none"}}>Category<BiRightArrowAlt  style={{margin:"0px"}}/></Link>
       <Link to="/" style={{color:"white",textDecoration:"none"}}>Womens fashion<BiRightArrowAlt  style={{margin:"0px"}}/></Link>
       </div>
         </div>


         <Shoptwo/>
         <div  style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
         <Paginations/>
         </div>
         <Fifthpage/>
         <Footer/>
         {/* <Mousehover/> */}
       

        </div>
  
  )
}

export default Shop