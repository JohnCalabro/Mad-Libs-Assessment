import react, { useState } from "react";
import Story from "./Story";

const MadlibForm = ({addStory}) => {
   const initialState = {
    noun: '',
    noun2: '',
    adjective: '',
    color: ''
   };
   const [formData, setFormData] = useState(initialState);

   const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
   }

   const handleSubmit = (e) => {      
    e.preventDefault();
    addStory({...formData}) 
    console.log({...formData})
    setFormData(initialState)                                        
}

   return (
    <div>
        <h1>Enter Words</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="noun">noun</label>
        <input 
            id="noun"
            type="text" 
            name="noun" 
            placeholder="noun"
            value={formData.name}
            onChange={handleChange}
            />
            <label htmlFor="noun2">noun 2</label>
        <input 
            id="noun2"
            type="text" 
            name="noun2" 
            placeholder="noun 2"
            value={formData.name}
            onChange={handleChange}
            />
            <label htmlFor="adjective">adjective</label>
        <input 
            id="adjective"
            type="text" 
            name="adjective" 
            placeholder="adjective"
            value={formData.name}
            onChange={handleChange}
            />
            <label htmlFor="noun">color</label>
        <input 
            id="color"
            type="text" 
            name="color" 
            placeholder="color"
            value={formData.name}
            onChange={handleChange}
            />
            <button>Get Story</button>
        </form>
        
    </div>
   ) 
}

export default MadlibForm;