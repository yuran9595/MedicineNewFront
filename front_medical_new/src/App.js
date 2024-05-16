import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<HomeComponent/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
