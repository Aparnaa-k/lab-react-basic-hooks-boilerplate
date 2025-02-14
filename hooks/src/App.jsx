import { useState } from "react";
import React from "react";
import "./App.css";
import UseContext from "../components/useContext";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
    </ToggleTheme.Provider>
  );
}

export default App;
