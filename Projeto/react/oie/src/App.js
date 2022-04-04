import './App.css'
import useFetch from './hooks/useFetch'

/*let data = [{
  nome:'Vitor',
  horarioEntrada : '13:00',
  horarioSaida : '17:00',
  tel : '(67) 99951-3248',
  id : 1,
  equipamentos : [{name:'charles',id:1},{name:'rodirgo',id:2}]
}]*/


function App() {

  const {loading, error, data} = useFetch('http://localhost:1337/api/agendamentos')
  if (loading) return (<div>loading</div>)
  if (error) return (<div>error: {error}</div>)
  return (
    <div className="App">
      <header>
        <span id='ifmaker'>IFMAKER</span><span id='agendamentos'>agendamentos</span>
      </header>
      <section>
        <div className='card-list-container'>
        {console.log(loading)}
        {console.log(data)}
        {console.log(data.data)}
        {data.data.map((value)=>{
          const attributes = value.attributes
          const nome = attributes.nome
          const horarioEntrada = attributes.horarioEntrada
          const horarioSaida = attributes.horarioSaida
          const tel = attributes.tel
          const equipamentos = attributes.equipamentos
          const id = value.id
          return(
            <div key={id} className='card-container'>
              <p>Nome: {nome}</p>
              <p>Horário: {`${horarioEntrada} - ${horarioSaida}`}</p>
              <p>Telefone: {tel}</p>
              
            </div>
          )
        })}
        </div>
        
      </section>
    </div>
  );
}

export default App;
