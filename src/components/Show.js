import Card from './Card'


const Show = (props) =>{
   
   
    return(
    <div className="container mt-5 mb-3">
      <div className="row">
        {props.allrepos && props.allrepos.map((item)=>{
                return(
                
                    <Card
                     key={item.id}
                     name={item.owner.login} 
                     userUrl={item.owner.html_url} 
                     repoUrl={item.html_url} 
                     repoName={item.name} 
                     img={item.owner.avatar_url} 
                     desc={item.description}
                     star={item.stargazers_count}
                     issue={item.open_issues_count}
                     createdAt={item.created_at}
                     
                     />
                
                )
            })} 
      </div>
    </div>
        )
}
export default Show