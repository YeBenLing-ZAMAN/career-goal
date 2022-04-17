import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayCourse from './Components/DisplayCourse/DisplayCourse';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/course' element={<Services></Services>}></Route>
        <Route path='/displayCourse' element={<DisplayCourse></DisplayCourse>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
