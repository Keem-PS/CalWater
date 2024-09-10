import Calwater from "./pages/calwater"
import React, { useState } from "react";


function App() {

  const [theme, setTheme] = useState<string>("light");

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  }

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
    <h1>{theme === "dark" ? <Calwater></Calwater> : <Calwater></Calwater>}</h1>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
  )
}

export default App
