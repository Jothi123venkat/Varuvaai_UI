import { Box } from "@mui/material";
import React from "react";
import { ss } from "../ProductAssests/ProductAssets";
import Command1 from '../ThirdTab/Commad1'

const Review1 = () => {
  return (
    <div>
          <div style={{display:"flex"}}>
            <div style={{backgroundColor:"#f9f9ff;",height:"200px", width:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Overall</h1>
          <p style={{lineHeight:"10px", fontSize:"50px",color:"blue",fontWeight:"bold"}}>4.0</p>
          <p>(03 Reviews)</p>
            </div>
              <div>
                <img src={ss} alt="img" style={{height:"200px",width:"200px"}} />
              </div>
          </div>
          <Command1/>
    </div>
  );
};

export default Review1;
