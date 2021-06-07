import React,{useState} from 'react'
import axios from 'axios'
import Show from './Show'

const people=[
    {id:1,name:'Ahmed', date:new Date(), age:'26'},
    {id:2,name:'Ali', date:new Date('11-4-2002'), age:'2'},
    {id:3,name:'Hany', date:new Date('11-4-2006'), age:'30'},
    
  ];

const Repo =()=>{

    const [repos,setRepos]=useState()
   
    const handleClick = async()=>{
        try{
            
            const data= await axios('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
            const listRepos=data.data.items
            // const listReposStar=data.data.items.map((item) => <li></li>)
            // const listReposImg=data.data.items.map((item) => <li> </li>)
            setRepos(listRepos)
            
            // console.log(data.data.items[0].name)
            
        }catch(err){
           console.log(err)
        }
    }
    
    return(
        <div>
         {/* <li>{repos}</li> */}
         <Show allrepos={repos}/> 
       {/* {repos && repos.map((item)=>{
            return(
                <Show 
                name={repos.name}/
                > 
            )
        })}  */}
        <button onClick={handleClick}>Pull data</button>
        </div>
    )
}
export default Repo