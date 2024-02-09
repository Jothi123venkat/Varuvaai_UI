import React, { createContext, useState } from 'react'

export const Appcontext = createContext();

const Modalcontext = ({children}) => {
    const[number,setNumber]=useState();

    
  return (
    <div>
        <Appcontext.Provider value={{number,setNumber}}>
            {children}
        </Appcontext.Provider>
    </div>
  )
}

export default Modalcontext