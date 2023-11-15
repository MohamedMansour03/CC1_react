
import { Routes, Route } from 'react-router-dom';
import Navbar from './Composants/NavBar';
import Calc from './Composants/calculatrice/Calc';
import Liste from './Composants/crud/principal';
import UsersList from './Composants/Api/user';
import Slider from './Composants/slider/Slider ';
import PageNotFound from './Composants/PageNotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Calc />} />
        <Route path="/TP2" element={<Slider/>} />
        <Route path="/TP3" element={<Liste />} />
        <Route path="/TP4" element={<UsersList />} />
        <Route path="/TP5" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;

