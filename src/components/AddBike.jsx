import { useState } from "react"
import axios from "axios"
import Navabar from "./Navbar"


function AddBike(){
  const[name,setName]=useState("")
  const[price,setPrice]=useState("")
  const [category,setcategory]=useState("")
  const [description,setdescription]=useState("")
  const [image,setimage]=useState("")
  const [brand,setbrand]=useState("")
const createBike=async(e)=>{
  e.preventDefault()
 const response=await axios.post("http://localhost:3000/bike/add-bike",{
    name,
    price,
    category,
    image,
    brand,
    description
  },
  {
    headers:{
      "Authorization" : localStorage.getItem("token")
    }
  })


if (response.status===200){
  alert("Bike added successfully")
}
else{
  alert("something went wrong")
}
}
    return(
    <>
    <Navabar/>
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">Add Bike</div>
  <div className="mt-3 text-center text-4xl font-bold">You can add bike here</div>
  <div className="p-8">
    <form onSubmit={createBike} >
    <div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter Name *" onChange={(e)=>setName(e.target.value)} />
      
    </div>
    <div className="flex gap-4">
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter Price*" onChange={(e)=>setPrice(e.target.value)}/>
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter category *" onChange={(e)=>setcategory(e.target.value)}/>
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter brand *" onChange={(e)=>setbrand(e.target.value)}/>
      
    </div>
   
    <div className="">
      <textarea name="textarea" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" onChange={(e)=>setdescription(e.target.value)}>Description</textarea>
    </div>
    <div className="text-center">
      <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Add bike</button>
    </div>
    </form>
  </div>
</div>
    </>
    )
}
export default AddBike