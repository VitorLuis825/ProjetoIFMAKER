import Header from '../components/Header/Header'
import CardList from '../components/CardList/CardList'
import Calendario from '../components/Calendario/Calendario'
import { Link } from 'react-router-dom'
import './index.css'

export default ()=>{
    return (
        <div className='index'>
            <Header />
            <div className="button-container">
                <Link to='/agendamentos/espaco'>
                    <button className='link-button'>
                        Agendar espaço
                    </button>
                </Link>
                <Link to='/agendamentos/servico'>
                    <button className='link-button'>
                        Agendar serviço
                    </button>
                </Link>
            </div>
            <Calendario />
        </div>
    )
}