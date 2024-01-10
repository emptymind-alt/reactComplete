import React,{useState} from "react";
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App=()=>{

  const[currPage,setCurrPage]=useState(1);
  
const itemsPerPage = 5;


const indexOfLastItem = currPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
const lastPage = Math.ceil(data.length/itemsPerPage);
//const numbers =itemsPerPage+5;
const numbers = [...Array(lastPage+1).keys()].slice(1);
//dfghjkl

const prevPage=(e)=>{
 console.log(currPage);
  if(currPage!==1  )
  setCurrPage(currPage-1);
    

}
const currentPage=(id)=>{
//  
//   else {
//   setCurrPage(id)
//   }
setCurrPage(id)
}
const nextPage=()=>{
  if(currPage!==lastPage)
  setCurrPage(currPage+1)
}
// const handleChange=(e)=>{
//   e.preventDefault();
//   console.log(e.target.name);
//   // setCurrPage(()=>e.currPage+1)

// }

  return(
    <>
    <div>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </thead>
        <tbody>
          {
            currentItems.map((ind,index)=>(
              <tr key={index}>
                <td>{ind.id}</td>
              <td >{ind.name}</td>
              <td>{ind.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
     
    </div>
    <div className="page">
   
      <ul className="pagination">
       
      <li  className='page-item '>
          <a href="#" className="page-link"
          onChange={prevPage}
           onClick={prevPage}
    >{`prev:${currPage-1}`}</a>
           </li>
          
           {
            numbers.map((n,i)=>(
             
              
             <li key={i}  className={`page-item${currPage===n}`? 'active':''}>
                <a href="#"className="page-link" onClick={()=>currentPage(n)}>{n}</a>
              
                
              </li>
            ))
           }
          
            <li className="page-item">
          <a href="#" className="page-link"
         onClick={nextPage}
         >{`next:${currPage+1}`}</a>
           </li>

      </ul>
     </div>

    </>
  )
}
export default App;