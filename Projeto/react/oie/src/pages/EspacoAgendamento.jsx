/*
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
*/
import { useState } from 'react'
import Header from '../components/Header/Header'
import usePost from '../hooks/usePost'
import './agendar.css'




export default ()=>{

    const [inputNome,setInputNome] = useState('')
    const [nomes,setNomes] = useState([])
    
    const [inputEntrada,setInputEntrada] = useState('')
    const [inputSaida,setInputSaida] = useState('')

    const 

    function removeNome(e){
        // Mudar o estado e apagar o elemento
    }

    return(
        <div>
        <Header />
        <div id='input-nomes-container'>
            <h1>Nomes</h1>
            <input type='text' value={inputNome} onChange={(e)=>{setInputNome(e.target.value)}} placeholder='o seu nome...' />
            <div class='scrolling-container'>
                {nomes.map((value)=>{
                    return(
                        <div className='nome-container'>
                            <button onClick={removeNome}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
        <div id='input-horario-container'>
            <h1>Horário de Uso</h1>
            <div>Das 
                <input type='text' value={inputEntrada} onChange={(e)=>{setInputEntrada(e.target.value)}} placeholder='14:00' />
                Até às 
                <input type='text' value={inputSaida} onChange={(e)=>{setInputSaida(e.target.value)}} placeholder='18:00' />
            </div>
        </div>

        <div id='input-equipamentos-container'>
                <h1>Equipamentos</h1>
                <button></button>
                <div class='scrolling-container'>
                {nomes.map((value)=>{
                    return(
                        <div className='nome-container'>
                            <button onClick={removeNome}>X</button>
                        </div>
                    )
                })}
                </div>
        </div>
        </div>
        
    )

}