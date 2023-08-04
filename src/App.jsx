import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      <h1>Here is the array list of puppies:</h1>
      {
        puppies.map((puppy) => {
             return <p key={puppy.id}>{puppy.name}</p>;
           })
       }
    </div>
  );
}


export default App
