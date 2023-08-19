import React, { useState } from "react";
import MadlibForm from "./MadlibForm"


const Story = ({noun, noun2, adjective, color}) => {

    // const [madlib, setMadlib] = useState('');

    let newStory = `There was a ${color} ${noun} who loved a ${adjective} ${noun2}`


    if(noun===undefined || noun2===undefined || adjective ===undefined  
        || color===undefined){
        newStory = '';
    } else {
        newStory = `There was a ${color} ${noun} who loved a ${adjective} ${noun2}`
    }
    
    return (
        
        <div>
            
                {newStory}
            
          
        </div>
    )

}

export default Story;