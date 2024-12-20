
import './App.css';
import Nav from './commpents/Nav';
import Header from './commpents/Header';
import Sidebar from './commpents/Sidebar';
import End from './commpents/End';
import Sidetwo from './commpents/Sidetwo';
import Footer from './commpents/Footer';
import Series from './series/Series';
import Movies from './movies/Movies';
import Login from './login/Login';
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={
        <>
     <Header/>
    <Sidebar/>
    <End/>
    <Sidetwo/>
    <Footer/>
        </>
      }></Route>



      <Route path='series' element={<Series/>} ></Route>
      <Route path='movies' element={<Movies/>} ></Route>
      <Route path='login' element={<Login/>} ></Route>



    </Routes>
   
    
   

    </>
  );
}

export default App;
