import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

function ClassesPage() {
    const [ClassSet,FnClassSet]=usestate(null);
    const {id} =useParams();
     useEffect(()=>{
        const FetchClass=async ()=> {
            const ResFetchClass= await fetch(`/api/job/${id}`);
            const data=  await ResFetchClass.json();
            FnClassSet(data);
        }
          FetchClass();

     },[]);
  return (
    <>
    Single Class Page
    </>
  )
}

export default ClassesPage
