// Code EyesOnMe Component Here
import React from 'react';



function EyesOnMe(){
     const handleFocus = ()=>{
        console.log("Good !")
    }
     const handleBlur = ()=>{
        console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>
            EyesOnMe
            </button>
    )
}
export default EyesOnMe