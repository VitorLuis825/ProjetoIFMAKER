import './CalendarioUnidade.css'

export default ({quantidade,equipamentos,top,height,width,left})=>{

    return(
    <div className='calendario-unidade' style={
        {'height' : height + 'px',
          'display' : 'inline-block',
         'width' : width + 'px',
         'top' : top + 'px',
         'left' : left + 'px'
         }}>
        <div className="quantidade-container">
            <div className="unidade-number" style={{'font-size' : height + 'px', 'lineHeight' : height + 'px'}}>
                {quantidade}
            </div>
            <div className="imagem-foda" style={{'height' : height}}>

            </div>
        </div>
        <div>
        {//Fotinhas dos equipamentos
        }
        </div>
        
    </div>

    )
    
}