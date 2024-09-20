import {useState} from "react";
import './App.css';

const content = [
  [
    "React is extremely popular",
    "It makes building compex, interactive UI's breeze",
    "It's powerful and flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX and Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js",
    "React Native (build native mobile aap with react)"
  ]
];
function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div>
      <header>
        <img src="logo192.png" alt="React Logo" />

        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendring the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button className={activeContentIndex ===0 ? "active": " "} onClick= {()=> setActiveContentIndex(0)}>Why React?</button>
          <button className= {activeContentIndex === 1 ? "active": " "} onClick={()=> setActiveContentIndex(1)}>Core Features</button>
          <button className={activeContentIndex === 2 ? "active" : " "} onClick ={() => setActiveContentIndex(2)}>Related Resources</button>
        </menu>

        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item)=> (<li key= {item}>{item}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
