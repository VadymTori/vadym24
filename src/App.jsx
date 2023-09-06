import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
    {()=>{console.log("puppy id: ", puppy.id)}}
  }
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
export default App



/* function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p key={puppy.id}>{puppy.name}</p>;
           })
       }
    </div>
  );
} */
