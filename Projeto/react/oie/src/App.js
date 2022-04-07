import './App.css'
import Home from './pages/index'
import EspacoAgendamento from './pages/EspacoAgendamento'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Agendamentos/espaco' element={<EspacoAgendamento />}/> 
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
