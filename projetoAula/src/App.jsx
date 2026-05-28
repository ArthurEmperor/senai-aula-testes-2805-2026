import { useState } from 'react';
import Botao from './components/Botao';
import Card from './components/Card';
import Contador from './components/Contador';
import { Browser, Route, Route} from 'react-router-dom';
import NaoEncontrado from './pages/NaoEncontrado.jsx'

import Home from './components/Navbar'
import Sobre from './components/Navbar'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} ></Route>
        <Route path="/sobre" element= {<Sobre />} ></Route>
        <Route path="*" element= {<NaoEncontrado />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
