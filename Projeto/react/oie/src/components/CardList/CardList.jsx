import './CardList.css'
import useFetch from '../../hooks/useFetch'

export default (props)=>{
      const {loading, error, data} = useFetch('http://localhost:1337/api/agendamentos' + '?populate=equipamentos')
      if (loading) return (<div>loading</div>)
      if (error) return (<div>error: {error}</div>)
    return(
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
          const equipamentos = attributes.equipamentos.data
          const id = value.id
          return(
            <div key={id} className='card-container'>
              <p>Nome: {nome}</p>
              <p>Horário: {`${horarioEntrada} - ${horarioSaida}`}</p>
              <p>Telefone: {tel}</p>
              Equipamentos:
              <ul>
                {equipamentos.map((value)=>{
                  return (<li key={value.id}>{value.attributes.nome}</li>)
                })}
              </ul>
              
            </div>
          )
        })}
        </div>
        
      </section>
      )

}


