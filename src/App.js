import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';
import Ranking from './Pages/Ranking';
import Reviews from './Pages/Reviews';
import Support from './Pages/Support';
import Experts from './Pages/Experts';
import NavBar from './Components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Ranking' element={<Ranking />}></Route>
        <Route path='/Reviews' element={<Reviews />}></Route>
        <Route path='/Support' element={<Support />}></Route>
        <Route path='/Experts' element={<Experts />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
