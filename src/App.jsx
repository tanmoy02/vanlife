import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import logo from './assets/images/logog.png';

function App() {
  return (
    <BrowserRouter>
      <header className='header'>
        <nav id='nav'>
          <ul className='nav-list'>
            <li className='nav-list__items'>
              <Link to='/'>
                <img src={logo} alt='vanlife logo' className='logo-img' />
              </Link>
            </li>
            <li className='nav-list__items'>
              <Link to='/about'>About</Link>
            </li>
            <li className='nav-list__items'>
              <Link to='/vans'>Vans</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
