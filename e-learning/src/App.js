import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home'
// import About from './components/about/About'
import Courses from './components/courses/Courses';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (

     <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          {/* <Route path='/about'  element={<About/>}/> */}
          <Route path='/courses'  element={<Courses/>}/>
          <Route path='/team'  element={<Team/>}/>
          <Route path='/contact'  element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
