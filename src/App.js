import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import RequireAuth from './Components/Auth/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import CheckOut from './Components/CheckOut/CheckOut';
import DisplayCourse from './Components/DisplayCourse/DisplayCourse';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import LogIn from './Components/LogIn/LogIn';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
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
        <Route path='course/:displayCourseID' element={<DisplayCourse></DisplayCourse>}></Route>
        <Route path='course/:displayCourseID/:checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;