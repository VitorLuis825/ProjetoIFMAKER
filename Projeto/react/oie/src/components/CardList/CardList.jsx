import './CardList.css'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'


export default (props)=>{
      const {loading, error, data} = useFetch('http://localhost:1337/api/agendamentos' + '?populate=equipamentos')
      if (loading) return (<div>loading</div>)
      if (error) return (<div>error: {error}</div>)
    return(
    <section>
        <div className='card-list-container'>

        {data.data.map((value)=>{
          const atts = value.attributes
          return(
            <Card key={value.id} id={value.id} equipamentos={atts.equipamentos.data} tel={atts.tel} horarioEntrada={atts.horarioEntrada} horarioSaida={atts.horarioSaida} nome={atts.nome}/>
          )
        })}
        
        </div>
      </section>
      )

}


