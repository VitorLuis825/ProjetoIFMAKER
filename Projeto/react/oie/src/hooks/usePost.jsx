export default (url,data)=>{
    // Não preciso criar um state aqui, pois não quero atualizar as telas após o post
    const post = async ()=>{
        try{
            await fetch(url,{method:'POST', mode:'cors',headers:{'Content-Type':'application/json'},body: JSON.stringify(data)})
            console.log('deu certo?')
            return 'deu certo'
        }catch(error){
            console.log('deu erro')
            console.log(error)
            return error
        }
    }
}