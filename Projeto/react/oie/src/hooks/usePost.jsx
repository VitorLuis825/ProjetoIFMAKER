export default (url,data)=>{
    const post = async ()=>{
        try{
            fetch(url,{method:'POST', mode:'cors',body: JSON.stringify(data)})
            return 'deu certo'
        }catch(error){
            return error
        }
    }
    post(url)    
}