import HistoryContent from '../Components/HistoryContent'
import E401 from '../Components/E401'
import '../css/History.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
export default function History() {
    const [authenticated, setAuthenticated] = useState(false)
    const [pageContent, setPageContent] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        try {
            const token = Cookies.get('jwt')
            if(token===null){
                setAuthenticated(false)
                setLoading(false)
            }else{
                axios.get(`http://localhost:8000/verify/${token}`)
                .then(() => {
                    setAuthenticated(true)
                     setPageContent(<HistoryContent/>)
                setLoading(false)
                }).catch((err) => {
                    console.log(err.response.data)
                     setPageContent(<E401/>) 
                     setLoading(false)
                });
            }
            
        } catch (error) {
            console.error(error)
            setPageContent(<E401/>) 
        }
     
    },[])
  return (
    <div>
    {loading ? (
      <div>Cargando...</div>
    ) : authenticated ? (
      pageContent
      
      
    ) : (
      <E401 />
    )}
  </div>
  )
}
