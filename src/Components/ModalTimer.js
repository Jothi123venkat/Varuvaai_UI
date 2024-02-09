// import * as React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import './ModalTimer.css'
// import { Prev } from 'react-bootstrap/esm/PageItem';

// function CircularProgressWithLabel(props) {
//   return (
//     <div style={{position:"relative"}}>
//       <div className="traffic-loader" style={{top:"16px"}}></div>
//       <div >
//         <Box sx={{ position: 'absolute', display: 'inline-flex', margin: '10px' ,left: "167px",top: "-21px"}} >
//           <CircularProgress
//             variant="determinate"
//             size={80}
//             thickness={4}
//             sx={{ color: 'rgba(255, 0, 0, 0.7)' }} 
//             {...props}
//           />
//           <Box
//             sx={{
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               position: 'absolute',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Typography variant="h6" component="div" color="primary" sx={{ marginBottom: '8px' }} >
//               {`${Math.round(props.value)}`}
//             </Typography>
//           </Box>
//         </Box>
//       </div>
//     </div>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// export default function CircularWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress <= 0 ? "" : prevProgress - 1))
//       console.log(progress);
//     }, 1000);

//     console.log(progress);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }

import React, { useEffect, useState } from "react";
import './ModalTimer.css'

function App() {
  // State variables to manage OTP input, minutes, and seconds
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const[animation,setAnimation]=useState(true)

  useEffect(() => {
    // Function to handle the countdown logic
    
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      // When seconds reach 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are 0
          clearInterval(interval);
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000); // Run this effect every 1000ms (1 second)

    return () => {
      // Cleanup: stop the interval when the component unmounts
      clearInterval(interval);
    };
  }, [seconds]); // Re-run this effect whenever 'seconds' changes

  // Function to resend OTP
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(10);
    setAnimation()
  };

  return (
   <div>
{seconds ===0 ?""
  :    <div className="loader">
  <span></span> </div> }


    <div className="container">
      <div className="card" style={{border:"none"}}>


        <div className="countdown-text">
          {/* Display countdown timer if seconds or minutes are greater than 0 */}
          
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining:{" "}
              <span style={{ fontWeight: 600 }}>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </p>
          ) : (
            // Display if countdown timer reaches 0
            <p style={{color:"red"}}>Didn't receive OTP?</p>
          )}

          {/* Button to resend OTP */}
         
          {seconds ===0 ?  <button
            // disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "white" : "#fff",
              background:"blue"
            }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>:"" }
        </div>

        {/* Button to submit OTP */}
        {/* <button className="submit-btn">SUBMIT</button> */}
      </div>
    </div>
    
   </div>
  );
}

export default App;