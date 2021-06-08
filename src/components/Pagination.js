import React from 'react'

const Pagination = ({reposPerPage, totalRepos}) =>{
    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(totalRepos / reposPerPage) ; i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers.map((num)=>{
        <li key={num} className="page-item">
            <a href="!#" className="page-link">{num}</a>
        </li>
      }))
    return(
  
        <nav>
            <ul className="pagination">
                {pageNumbers.map((num)=>{
                   <li key={num} className="page-item">
                       <a href="!#" className="page-link">{num}</a>
                   </li>
                 })}
            </ul>
        </nav>
    )
}
export default Pagination