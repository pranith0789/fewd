// import React from 'react';
// import {Route,Routes,BrowserRouter} from 'react-router-dom';
// import About from './about.js';
// import Home from './home.js';
// import Contact from './contact.js';
// const App = () => {
//   return(
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/about" element={<About/>}></Route>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/contact" element={<Contact/>}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
import React, { useMemo, useState } from 'react';

// A function to calculate the sum of two numbers
function sum(a, b) {
  console.log('Calculating sum...');
  return a + b;
}

// A component that uses useMemo to calculate the sum of two numbers
function CalculateSum({ a, b }) {
  const result = useMemo(() => {
    return sum(a, b);
  }, [a, b]);

  return <div>{result}</div>;
}

// A parent component that allows the user to input two numbers
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleNum1Change(event) {
    setNum1(Number(event.target.value));
  }

  function handleNum2Change(event) {
    setNum2(Number(event.target.value));
  }

  return (
    <div>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <label>
        Number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <CalculateSum a={num1} b={num2} />
    </div>
  );
}

export default App;