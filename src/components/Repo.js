import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Show from './Show'
import {Button} from 'react-bootstrap'
const Repo =()=>{

    const [repos,setRepos]=useState([])
    const [currentPage, setCurrentPage]=useState(1)
    const [button, setButton]=useState(false)
    const [loading, setLoading]=useState(false)
   

    const handleScroll=(event)=>{
        const{scrollTop, clientHeight, scrollHeight}=event.currentTarget

       if(scrollHeight - scrollTop === clientHeight){
           setCurrentPage(prev => prev + 1)
       }
       
     }


    useEffect(()=>{
        const fetchRepos = async()=>{
            setLoading(true)
            const data= await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${currentPage}`)
            const listRepos=data.data.items
            setRepos(listRepos)
            setLoading(false)
            setButton(true)
        }
        fetchRepos()
    }, [currentPage])



    // Get Current repos

    // const indexOfLastRepo= currentPage * reposPerPage
    // const indexOfFirstRepo= indexOfLastRepo - reposPerPage
    // const currentRepos= repos.slice(indexOfFirstRepo, indexOfLastRepo)


    // ///////////////////////////////////////

   



    // const handleClick = async()=>{
    //     try{
            
    //         const data= await axios(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)
    //         const listRepos=data.data.items
    //         setRepos(listRepos)
            
            
    //     }catch(err){
    //        console.log(err)
    //     }
    // }

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
        <div>
        
          <Show repos={repos} loading={loading} /> 
           
           <Button style={{display: !button || loading ? 'none' : 'block' }} onClick={handleScroll}>load more</Button> 
          {/* <Pagination reposPerPage={reposPerPage} totalRepos={repos.length}/> */}
        </div>
    )
}
export default Repo