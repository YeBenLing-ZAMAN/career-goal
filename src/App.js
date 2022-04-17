import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/course'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
