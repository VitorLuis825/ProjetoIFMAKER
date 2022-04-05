import './App.css'
import Home from './pages/index'
import Agendamento from './pages/agendar'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

/*let data = [{
  nome:'Vitor',
  horarioEntrada : '13:00',
  horarioSaida : '17:00',
  tel : '(67) 99951-3248',
  id : 1,
  equipamentos : [{name:'charles',id:1},{name:'rodirgo',id:2}]
}]*/

//Nao consegui fazer a rota do cardlist funcionar.
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Agendamento' element={<Agendamento />}/> 
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
