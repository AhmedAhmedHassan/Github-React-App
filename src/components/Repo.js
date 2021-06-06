import React,{useState} from 'react'
import axios from 'axios'

const Repo =()=>{

    const [repos,setRepos]=useState()
   
    const handleClick = async()=>{
        try{
            const data= await axios('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
            const listRepos=data.data.items.map((item) => 
            <li key={item.id}>
                {item.name}
                {item.stargazers_count}
                <img  src={item.owner.avatar_url} />
                </li>)
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
        <h1>hi</h1>
         <li>{repos}</li>

        <button onClick={handleClick}>Pull data</button>
        </div>
    )
}
export default Repo