import { useState, useEffect } from "react"


export default (url)=>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
    
        const fetchData = async ()=>{
            
            setLoading(true)
            
            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                setLoading(false)
            } catch(e) {
                setError(e)
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {loading,error,data}
    
}