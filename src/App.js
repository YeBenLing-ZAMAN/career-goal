import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayCourse from './Components/DisplayCourse/DisplayCourse';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import LogIn from './Components/LogIn/LogIn';
import Services from './Components/Services/Services';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/course' element={<Services></Services>}></Route>
        <Route path='/displayCourse' element={<DisplayCourse></DisplayCourse>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
