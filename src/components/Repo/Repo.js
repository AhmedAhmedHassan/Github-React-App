import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Show from '../Show/Show'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
const Repo =()=>{
    
    // useState hook

    // Pull repos state
    const [repos,setRepos]=useState([])
    // get current page state
    const [currentPage, setCurrentPage]=useState(1)
    // load more button state
    const [button, setButton]=useState(false)
    // Loading state while getting the data
    const [loading, setLoading]=useState(false)
    // get back to first page state
    const [prevButton, setPrevButton]=useState(false)
    //  error message state
    const [error, setError]=useState(false)

    // function to display the loadmore button and increase the current page onClick
    const handleScroll=()=>{
       setPrevButton(true)
       setCurrentPage(prev => prev + 1)
     }

    // Get back to first page function
    const handlePrevPage = () =>{
        setCurrentPage(1)  
        setPrevButton(false)
       
    }

    // useEffect hook 
    useEffect(()=>{
        const fetchRepos = async()=>{
            setLoading(true)
            const data= await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${currentPage}`)
            const listRepos=data.data.items      
                setRepos(listRepos)
                setLoading(false)
                setButton(true)
                if(listRepos.length === 0){
                  setError(true)
                  setButton(false)

                }
        }
        fetchRepos()
    }, [currentPage])



    return(
    <Container>
           {/* Back to the first page button component */}
           <Button className="btn btn-danger mt-4" style={{display:!prevButton || loading ? 'none':'block'}} onClick={handlePrevPage} >Back to first page</Button>
           {/* Show all repos component */}
           <Show repos={repos} loading={loading}/> 
           {/* Error message if there is no data fetched */}
           <div className={`alert alert-danger text-center ${!error ? 'd-none' : ''}`} >
            <strong>Sorry, There are no data to get</strong>
           </div>
           {/* Load more button */}
           <Button className="mx-auto" style={{display: !button || loading ? 'none' : 'block' }} onClick={handleScroll}>load more</Button> 
    
    </Container>
    )
}
export default Repo