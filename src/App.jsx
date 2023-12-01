import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const ToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`h-full ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} ToggleDarkMode={ToggleDarkMode} />
      <Jumbotron />
      <Footer/>
    </div>
  );
}

export default App;
