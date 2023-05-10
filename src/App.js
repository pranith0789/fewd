//9
import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import About from './about.js';
import Home from './home.js';
import Contact from './contact.js';
const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;


// 6
/*
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClick1(){
    setCount(count - 1);
  }
  return (
    <div>
      <p>Count is {count} .</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClick1}>Decrement</button>
    </div>
  );
}

export default Counter;
*/


// 7
/*
import React, { useState } from 'react';

function FormTable() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formDataObj = Object.fromEntries(data.entries());
    setFormData(formDataObj);
  };

  return (
    <div>
      <h2>Form Data Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" />

        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Form Data:</h3>
      {Object.keys(formData).length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No form data submitted yet</p>
      )}
    </div>
  );
}

export default FormTable;
*/

// 8
/*
import React from 'react';
import { useState, useMemo } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const expensiveCalculation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    return result;
    }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default App;
*/


// 10
/*
import './App.css';
import React, {useState} from 'react';
import axios from "axios";

function App() {
  const[entrys,setEntrys]=useState([]);
  axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const entry = res.data;
        console.log(entry);
        setEntrys(entry);
      })
  return (
    <div className="App">
      <table style={{border: "3px solid rgb(0, 0, 0)"}}>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
        </thead>
        {
          entrys
            .map(entry =>
                <tbody>
                    <td>{entry.id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.username}</td>
                    <td>{entry.email}</td>
                    <td>{entry.phone}</td>
                    <td>{entry.website}</td>
                </tbody>
            )
        }
      </table>
    </div>
  );
}

export default App;
*/