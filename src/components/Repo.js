import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Show from './Show'

const Repo =()=>{

    const [repos,setRepos]=useState([])
    const [page, setPage]=useState(1)
    const [loading, setLoading]=useState(true)
   
    const handleClick = async()=>{
        try{
            
            const data= await axios(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)
            const listRepos=data.data.items
            setRepos(listRepos)
            
            
        }catch(err){
           console.log(err)
        }
    }

    // ///////////////////////////////////////

    // const handleScroll=(event)=>{
    //    const{scrollTop, clientHeight, scrollHeight}=event.currentTarget

    //    if(scrollHeight - scrollTop === clientHeight){
    //        setPage(prev => prev + 1)
    //    }
    //    console.log(scrollTop)
    //    console.log(clientHeight)
    // }

    //  //////////////////////////////////////
    // useEffect(()=>{
    
    //      const loadUsers = async () => {

    //         setLoading(true)
    //         const newUsers=await axios(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)
    //         setRepos((prev) => [...prev, ...newUsers])
    //         setLoading(false)
    //      }

    //      loadUsers()

    // }, [page])
    
    return(
        <div >
        
          <Show allrepos={repos} /> 
          {loading && <p>loading .....</p>}
          <button onClick={handleClick}>Pull data</button>
        </div>
    )
}
export default Repo