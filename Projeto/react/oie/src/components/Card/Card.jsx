export default ({id,nome,tel,horarioEntrada,horarioSaida,equipamentos})=>{
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
    
  </div>)
}