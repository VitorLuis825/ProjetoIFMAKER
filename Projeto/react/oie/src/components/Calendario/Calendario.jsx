import useFetch from '../../hooks/useFetch'
import CalendarioUnidade from '../CalendarioUnidade/CalendarioUnidade'
import './Calendario.css'
import {useRef, useState} from 'react'

const maxPessoas = 16

export default ()=>{

    const [manha,setManha] = useState()
    const [tarde,setTarde] = useState()

    const {loading,error,data} = useFetch('http://localhost:1337/api/agendamentos?populate=equipamentos')
    const refi = useRef()
    let pessoasAgendadas = 0
    
    return(
        <div className="calendario-container">
            <div className='calendario'  ref={refi}>
                <div className='coluna 8-9' />
                <div className='coluna 9-10'/>
                <div className='coluna 10-11' />
                <div className='coluna 11-12' />
                <div className='desativado' />
                <div className='coluna 14-15' />
                <div className='coluna 15-16' />
                <div className='coluna 16-17' />
                <div className='coluna 17-18' />
                
                {data && data.data.map((value)=>{
                    const atts = value.attributes
                    const hrEntrada = parseInt(atts.horarioEntrada.split(":")[0]) // Hora de entrada
                    const minEntrada = parseInt(atts.horarioEntrada.split(":")[1]) // Minuto de entrada
                    const hrSaida = parseInt(atts.horarioSaida.split(":")[0]) // Hora de saida
                    const minSaida = parseInt(atts.horarioSaida.split(":")[1]) // Minuto de saida

                    console.log('/////////////')

                    const quantidade = atts.nomes.split(';').length
                    console.log(quantidade)
                    
                    // Top e altura -> dependem do numero de pessoas
                    const contHeight = refi.current.offsetHeight
                    const contWidth = refi.current.offsetWidth

                    const altPerEstudante = contHeight / maxPessoas // Altura cedida por estudante
                    const height = altPerEstudante * quantidade // Altura, do elemento da vez
                    const top = altPerEstudante * pessoasAgendadas // distancia até o topo, do elemento da vez

                    

                    // Left e width -> depende do horario
                    const minutos = ((hrSaida - hrEntrada) * 60) + minSaida - minEntrada
                    const minutosDesdeAs8 = (hrEntrada - 8) * 60 + minEntrada - 0
                    const left = contWidth / 600 * minutosDesdeAs8
                    const width = contWidth / 600 * minutos
                    
                    pessoasAgendadas = pessoasAgendadas + quantidade
                    return(
                        <CalendarioUnidade key={value.id} equipamentos={atts.equipamentos.data} quantidade={quantidade} width={width} height={height} top={top} left={left}/>
                    )


                })}
            </div>
        </div>
    )
}