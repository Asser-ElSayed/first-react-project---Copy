import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function BookingPage() {
    const Navigate=useNavigate();
    
  const { register, handleSubmit,formState:{errors,isSubmitting} } = useForm();
  const onSubmit =  async (data) =>{
     await fetch('http://localhost:9000/BookingData'
      ,{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data),
      });
      toast.success('Reservation Made succesfully!')
      return Navigate('/');
    }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">Name</label>
      <input className="block text-gray-700 text-sm font-bold mb-2" {...register("name",{required:"Name is required", minLength:{
      value:3,
      message:"Name must be at least 3 characters",}

      })} placeholder="Name" />
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}
      <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
      <input  className="block text-gray-700 text-sm font-bold mb-2" {...register("mail", {required:"Email is required",
        validate:(value)=>{
            if (!value.includes("@")){
                return "Email must include @"
            }
            return true;
            }

      })} placeholder="email"/>
      {errors.mail && <div className="text-red-500">{errors.mail.message}</div>}
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classBus">Class</label>
      <select  placeholder="classBus"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("busClass",{required:true})}>
        <option value="Business Class">Business Class</option>
        <option value="Aero Class">Aero Class</option>
        <option value="Normal Class">Normal Class</option>
      </select>
      
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dep" >Departure Station</label>
      <select placeholder="dep" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("Dep",{required:true})}>
        <option value="Cairo">Cairo</option>
        <option value="Sharm El-Shiekh">Sharm El-Sheikh</option>
        <option value="Alexandria">Alexandria</option>
      </select>
      <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="arr">Arrival Station</label>
      <select  placeholder="arr"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("Arr",{required:true})}>
        <option value="Cairo">Cairo</option>
        <option value="Sharm El-Shiekh">Sharm El-Sheikh</option>
        <option value="Alexandria">Alexandria</option>
      </select>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSubmitting} >{isSubmitting ? "Loading" : "Submit"} </button>
    </form>
  
  
  </>);
}