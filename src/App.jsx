import { useState } from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './layouts/Nav'
import Booking from './pages/Booking'
import Classes from './pages/Classes'
import Faq from './pages/Faq'
import ClassesPage from './pages/ClassesPage'
import BookingPage from './pages/BookingPage'
import Update from './pages/Update'
function App() {
  const addJob=  async(newJob)=>{
   const res= await fetch('/api/jobs'
    ,{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newJob),
    });
    return;
  }
  const deleteJob =async (id)=>{
    const res= await fetch(`api/jobs/${id}`
     ,{
       method:'DELETE',
       })

  }
  const router= createBrowserRouter(
    createRoutesFromElements
(
<Route path='/' element={<Nav/>}>
<Route  index element={<HomePage/>}/>
<Route path='/Booking2' element={<Booking addJobSubmit={addJob}/>}/>
<Route path='/Booking' element={<BookingPage/>}/>
<Route path='/Classes' element={<Classes deleteJob={deleteJob}/>}/>
<Route path="/update/:id" element={<Update/>}/>
<Route path='/faq' element={<Faq/>}/>

<Route path='/Classes/:id' element={<ClassesPage/>}/>
 </Route>
)
  )
  return (

  <RouterProvider router={router}/>
  )
}

export default App
