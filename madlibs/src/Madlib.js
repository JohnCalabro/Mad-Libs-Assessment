import React, { useState } from "react";
import MadlibForm from "./MadlibForm"
import Story from "./Story";


const Madlib = () => {

    const INITIAL_STATE = [
        {noun : ''},
        {noun2: ''},
        {adjective: ''},
        {color: ''}
    ]

    const [story, setStory] = useState(INITIAL_STATE);
    const [appendLib, setAppendLib] = useState('');

    const addStory = (newStory) => {
        console.log({...newStory})
        setStory(story => [...story, {...newStory}])
        const {noun, noun2, adjective, color} = {...newStory}
        // const fullStory = `There was a ${color} ${noun} who loved a ${adjective} ${noun2}`
        // return fullStory
    }

   


    return (<div>
        <MadlibForm addStory={addStory}/>
        <div>
        {story.map(({noun, noun2, adjective, color}) => 
        <Story noun={noun} noun2={noun2} adjective={adjective} color={color}/>)}
            
        </div>
        
    </div>)
};

export default Madlib;