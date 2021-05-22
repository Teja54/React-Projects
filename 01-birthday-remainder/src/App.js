import React, { useState } from "react";
import data from "./data";
import List from "./list";

function App() {
  const [people, setPreople] = useState(data);
  return (
    <>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPreople([])}>Clear All</button>
      </section>
    </>
  );
}

export default App;
