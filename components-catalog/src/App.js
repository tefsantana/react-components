import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]); // array of items that will be the components of the main section.
  return (
    <div className="App">
      <section className="App-content font-sans text-left">
        <h1 className="">
          Web Components Catalog
        </h1>
        <h3>About this project.</h3>
        <div className=''>
          <span>The main objective of this project is to show you all the components that I have created.</span>
          <ul>
            <li>Of course, this project is a public one so everyone can use it as help to guide themselves in the usage of React.</li>
            <li>Also, I'll try to use coding best practices to reach a good readability.</li>
          </ul>
        </div>
        <div className='text-lg'>
          <h3>This project is made with:</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript React (using Hooks)</li>
            <li>Tailwind CSS</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>ESLint</li>
            <li>Jest</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
