import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
    {()=>{console.log("puppy id: ", puppy.id)}}
/*     console.log("Text for testing") */
  }
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <button onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </button>
        );
      })}
    </div>
  );
}
export default App
