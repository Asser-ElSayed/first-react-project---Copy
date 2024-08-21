import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Update() {
    const navigate = useNavigate();
    const {id}=useParams();
    const [Values,SetValues]=useState({
        name: '',
      mail: '',
      busClass: '',
      Dep: '',
      Arr: '',
      id: id
    })
    useEffect(()=>{
        axios.get('http://localhost:9000/BookingData/'+id)
        .then(res =>{
            SetValues({
                ...Values , name: res.data.name , mail: res.data.mail , busClass: res.data.busClass , Dep: res.data.Dep , Arr: res.data.Arr
            })
        })
    },[])
    const handleSubmit = (e)=> {
        e.preventDefault();
        {
            axios.put('http://localhost:9000/BookingData/'+id, Values)
            .then(res =>{
                navigate('/Classes');
            
               toast.success("Reservation Updated Successfully!");
            })
        }
        

    }
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Reservation</h2>
      <form  onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={Values.name} placeholder="Type name" onChange={e => SetValues({...Values, name: e.target.value})} required/>
              </div>
              <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">e-mail</label>
                  <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={Values.mail} placeholder="Email" onChange={e => SetValues({...Values, mail: e.target.value})} required/>
              </div>
            
              <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={Values.busClass} onChange={e => SetValues({...Values, busClass: e.target.value})}  required>
                      <option value='Aero Class'>Aero Class</option>
                      <option value='Normal Class'>Normal Class</option>
                      <option value='Business Class'>Business Class</option>
                     
                  </select>
              </div>
              <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departure Station</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={Values.Dep} onChange={e => SetValues({...Values, Dep: e.target.value})}  required>
                  <option value="Sharm El-Shiekh">Sharm El-Shiekh</option>
                      <option  value="Alexandria">Alexanderia </option>
                      <option value="Cairo">Cairo</option>
                    
            
                  </select>
              </div>
              
              <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Arrival Station</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={Values.Arr} onChange={e => SetValues({...Values, busClass: e.target.value})} required>
                      <option value="Sharm El-Shiekh">Sharm El-Shiekh</option>
                      <option  value="Alexandria">Alexanderia </option>
                      <option value="Cairo">Cairo</option>
                
                  </select>
              </div>
              <button type="submit" className="text-white bg-white-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Update product
              </button>
              
          </div>
      </form>
  </div>
</section>
    </>
  )
}

export default Update
