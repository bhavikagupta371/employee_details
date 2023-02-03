import React, { useEffect, useState } from 'react'
import './card.css'
import ContentModal from './modal';
import CustomPagination from "./Pagination"
const Card = () => {
    const [page, setPage] = useState(1);

const [data, setData] =useState([]);

const getEmployData = async()=>{
    try{
        const res =await fetch(`https://jsonplaceholder.typicode.com/users?&page=${page}`);
      const actualData= await res.json();
      console.log(actualData);
      setData(actualData)
    }catch(err){
console.log(err);
    }

}

    useEffect(() => {
        window.scroll(0, 0);
        getEmployData();
    }, [page]);

    
  return (
    <>
    <div className='box'>
    
<table>
    
    <tbody>
    
        {
            data.map((curElem, ind)=>{
                return(
                <div className='card'>
            <tr key={ind} >
            <th className='card-inner'><span> </span>{curElem.username}</th>
            <td className='card-inner'><span>Contact</span> {curElem.name}</td>
            <td className='card-inner'><span>City</span>{curElem.address.city}</td>
            <td > <span>Street</span>{curElem.address.zipcode} </td>
            
        </tr>
        <ContentModal/>
        </div>
     )
            })
        }
        
    </tbody>
    
</table><div>
<CustomPagination setPage={setPage} />
</div>
</div>
    </>
  )
}

export default Card;





// .slice(0,2)