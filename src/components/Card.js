import './card.css'

const Card = (props) =>{
    
    return(
        
            <div className="col-md-4">
                <div className="card p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon"><img src= {props.img}/> </div>
                            <div className="ms-2 c-details">
                                <h6 className="mb-0"><a href={props.userUrl} target="_blank">{props.name}</a></h6> 
                              
                                <span>{props.createdAt.split("T")[0]}</span>
                            </div>
                        </div>
                      
                    </div>
                   
                    <div className="mt-5">
                        <div class="badge"> 
                          <img src="repo.svg" className="icon_img"  alt="repo icon" />
                          <span className="text-dark"> {props.repoName.length > 20 ? props.repoName.substring(0, 40) + "..." : props.repoName }</span> 
                        </div>
                        <p className="desc">
                            {!props.desc ? 'There is no description':props.desc.substring(0, 50) + "..." + " "}
                            <a href={props.repoUrl} target="_blank">read more</a>
                        </p>
                        <div className="mt-5">
                            <div className="mt-3">
                                 <span className="text1">Issues: {props.issue}  </span> 
                                 <img src="issue.svg" className="icon_img"  alt="issue" />
                                 
                            </div>
                            <div className="mt-3">
                                 <span className="text1">Stars: {props.star} </span> 
                                 <img src="star.svg" className="icon_img"  alt="star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        

    )
}
export default Card