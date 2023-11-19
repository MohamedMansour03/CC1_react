
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './Composants/AppContext';
import ContextProvider from './Composants/ContexeLang';
import NavBar from './Composants/NavBar';
import Calc from './Composants/calculatrice/Calc';
import Liste from './Composants/crud/principal';
import UsersList from './Composants/Api/user';
import PageNotFound from './Composants/PageNotFound';
import Footer from './Composants/footer';
import './App.css';
import Slider from './Composants/slider/Slider ';


function App() {
  return (
    <AppProvider>
      <ContextProvider>
      <div className="App"> 
        <NavBar />             
        <Routes>
          <Route path="/" element={<Calc />} />
          <Route path="/TP2" element={<Slider></Slider>} />
          <Route path="/TP3" element={<Liste />} />
          <Route path="/TP4" element={<UsersList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div> 
      </ContextProvider>
    </AppProvider>
  );
}

export default App

// tout les composant utiliser states de context doit etre dans composant AppProvider !!