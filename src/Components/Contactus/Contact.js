import React from 'react'
import Navs from '../Navs'
import { Link } from 'react-router-dom'
import { BiRightArrowAlt } from 'react-icons/bi'
import Formss from './Formss'
import Footer from '../Footer'
import Googlemap from './Googlemap'
const Contact = () => {
  return (
    <div>
        <Navs/>
        <div  style={{textAlign:"center",color:"white",marginTop:"60px"}} className='shopb'>

<div style={{paddingTop:"50px"}}>
<h1>Shop Category Page</h1>
 
 <Link to="/"  style={{color:"white", textDecoration:"none"}}>Home<BiRightArrowAlt style={{margin:"0px"}}/></Link>
<Link to="/" style={{color:"white",textDecoration:"none"}}>Contact<BiRightArrowAlt style={{margin:"0px"}}/></Link>

</div>
  </div>
  <Googlemap/>
        <Formss/>
        <Footer/>
    </div>
  )
}

export default Contact