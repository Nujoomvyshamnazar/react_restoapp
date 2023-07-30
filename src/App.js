import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
function App() {
  return (
<Router>
<Routes>
<Route path="/" element={<Home/>} exact />
<Route path="/about" element={<About/>} exact />
<Route path="/menu" element={<Menu/>}  exact/>
<Route path="/contact" element={<Contact/>} exact />
</Routes>
</Router>
    
  );
}

export default App;
