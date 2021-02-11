import './App.css';
import Navbar from './components/Navbar';
import { GlobalStyle } from './globalStyle';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <GlobalStyle />
        <Home />
      </Router>
    </>
  );
}

export default App;
