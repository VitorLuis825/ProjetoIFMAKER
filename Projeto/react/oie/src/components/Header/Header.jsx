import './Header.css'
import {Link} from 'react-router-dom'

export default ()=>{
    return( 
    <header>
        <div id='title-container'>
            <span id='ifmaker'>IFMAKER</span><span id='agendamentos'>agendamentos</span>
        </div>
        <div id='links-container'>
            <Link to='/'>IFMAKER</Link>
            <Link to='/agendamento'>Agendar</Link>
        </div>
    </header>
    )
}
