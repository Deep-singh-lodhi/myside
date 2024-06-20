// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import Navbar from './NavBar';
// import nav from './nav';
import Navbar from './NavBar';
import Home from './Home';
import Jewelery from'./Jewelery';
import Electronics from './Electronics';
import Mens from './Mens';
import Women from './Women';
import Item from './Item';
function App() {
  return (
    <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/'element={<Home></Home>}></Route>
    <Route path='/jewelery'element={<Jewelery></Jewelery>}></Route>
    <Route path='/electronics'element={<Electronics></Electronics>}></Route>
    <Route path='/mens'element={<Mens></Mens>}></Route>
    <Route path='/women'element={<Women></Women>}></Route>
    <Route path='/item'element={<Item></Item>}></Route>

  </Routes>
  </BrowserRouter>

  )
}

export default App;
