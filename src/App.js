import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className = "container">
      <h3>
        {people.length} birthdays today
        <List people={people}></List>
        <button onClick={()=>{
          console.log("you clicked me")
        }}>clear all</button>
      </h3>
      </section>
    </main>
  )
}

export default App;
