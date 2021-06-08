import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Show from './Show'
import Pagination from './Pagination'

const Repo =()=>{

    const [repos,setRepos]=useState([])
    const [currentPage, setCurrentPage]=useState(1)
    const [reposPerPage, setReposPerPage]=useState(9)
    const [loading, setLoading]=useState(false)
   

    useEffect(()=>{
        const fetchRepos = async()=>{
            setLoading(true)
            const data= await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`)
            const listRepos=data.data.items
            setRepos(listRepos)
            setLoading(false)

        }
        fetchRepos()
    }, [])



    // Get Current repos

    const indexOfLastRepo= currentPage * reposPerPage
    const indexOfFirstRepo= indexOfLastRepo - reposPerPage
    const currentRepos= repos.slice(indexOfFirstRepo, indexOfLastRepo)




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
        <div >
        
          <Show repos={currentRepos} loading={loading}/> 
          {loading && <p>loading .....</p>}
          {/* <button onClick={handleClick}>Pull data</button> */}
          <Pagination reposPerPage={reposPerPage} totalRepos={repos.length}/>
        </div>
    )
}
export default Repo