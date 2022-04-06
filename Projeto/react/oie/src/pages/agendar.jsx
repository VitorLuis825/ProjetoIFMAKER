import { useState } from 'react'
import Header from '../components/Header/Header'
import usePost from '../hooks/usePost'
import './agendar.css'

export default ()=>{

    let [nome,setNome] = useState('')
    let [tel,setTel] = useState('')
    let [horaEntrada,setHoraEntrada] = useState('')
    let [horaSaida,setHoraSaida] = useState('')

    return(
        <div>
        <Header />
        <form>
            <label>
                Insira seu nome: <input type='text' onChange={(e)=>{setNome(e.target.value)}}></input>
            </label>
            <label>
                Insira seu telefone: <input type='text' onChange={(e)=>{setTel(e.target.value)}}/>
            </label>
            <label>
                Insira o horario de entrada: <input type='text' onChange={(e)=>{setHoraEntrada(e.target.value)}}/>
            </label>
            <label>
                Insira o horario de saída: <input type='text' onChange={(e)=>{setHoraSaida(e.target.value)}}/>
            </label>
            <input type='submit' onClick={(e)=>{
            e.preventDefault()
            console.log('oi')
            let obj = {
                "data": {
                "nome": nome,
                "tel": tel,
                "horaEntrada": horaEntrada,
                "horaSaida": horaSaida
                }
            }
            console.log(obj)
            usePost('http://localhost:1337/api/agendamentos',obj)
}}/>
        </form>
        </div>
        
    )

}