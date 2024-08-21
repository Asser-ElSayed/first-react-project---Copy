
import { useState,useEffect } from 'react'
import bookingDatabase from '../bookingDatabase.json'
import { toast } from 'react-toastify';
import { useHref, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function card() {
    const {id} =useParams ();
    const [booking,showBooking]=useState([]);
    useEffect( ()=> {
        const fetchBooking= async ()=> {
            const respone= await fetch('http://localhost:9000/BookingData');
            const data = await respone.json();
            showBooking(data);
        }
    fetchBooking();
    },[])
  
    
useEffect( 
    ()=>{
        axios.get(`http://localhost:9000/BookingData/`+id)
        .then(res => console.log(res))
    },[])
    const onDeleteClick = (id)=> {
        axios.delete(`http://localhost:9000/BookingData/`+id)
        .then(res => {
            Navigate('/');
            toast.error("Reservation Removed")
        })
      }



  const Navigate=useNavigate();
  const handleId=`http://localhost:9000/BookingData/${id}`

  return (
    <div>
      {booking.map((book)=>(
      <>
     

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3"  key={book.id}>
                    Name
                </th>
                <th scope="col" className="px-6 py-3"  key={book.id}>
                    Class
                </th>
                <th scope="col" className="px-6 py-3" key={book.id}>
                    mail
                </th>
                <th scope="col" className="px-6 py-3"key={book.id}>
                    Departure Station
                </th>
                <th scope="col" className="px-6 py-3"key={book.id}>
                    Action
                </th>
                <th scope="col" className="px-6 py-3"key={book.id}>
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"key={book.id}>
                    {book.name}
                </th>
                <td className="px-6 py-4"key={book.id}>
                    {book.busClass}
                </td>
                <td className="px-6 py-4"key={book.id}>
                    {book.mail}
                </td>
                <td className="px-6 py-4"key={book.id}>
                    {book.Dep}
                </td>
                <td className="px-6 py-4"key={book.id}>
                <Link to={`/update/${book.id}`} className="in-line text-green-600 hover:underline">Update </Link>


                    
                </td>
                <td className="px-6 py-4">
                <button className="in-line text-red-500 hover:underline" onClick={() => onDeleteClick (book.id)}>Delete </button>
          
                </td>
            </tr>
            
           
            
          
        </tbody>
    </table>
</div>

   </>

))}
    </div>
  )
 
}

