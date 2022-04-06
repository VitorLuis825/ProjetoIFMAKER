export default (url)=>{
    // Não preciso criar um state aqui, pois não quero atualizar as telas após o delete

    const deletar = async()=>{
        try{
            let response = await fetch(url,{method:'DELETE'})
            return response
        }catch(error){
            return error
        }
    }
    deletar(url)
}