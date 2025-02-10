import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import Navabar from './Navbar'

const Bike = () => {
    const [bike,setBike]=useState([])
    const fetchBikes= async()=>{
        const response=await axios.get("http://localhost:3000/provider/bikes/",{
            headers:{
              "Authorization" : localStorage.getItem("token")
            }
          })
    if(response.status==202){
        setBike(response.data.data)
    }
    else{
        alert("something wrong")
    }
    }
    const handleDelete = async (id)=>{
        const response=await axios.delete("http://localhost:3000/admin/bikes/" + id,{
          headers:{
            "Authorization" : localStorage.getItem("token")
          }
        })
        if(response.status==200){
            window.location.href = "/bike"
        }
        else{
            alert("something wrong")
        }
      }
    useEffect(()=>{
        fetchBikes()
    },[])
  return (
    <div>
        <Navabar/>
    <div className="text-gray-900 bg-gray-200 mt-[50px]">
  <div className="p-4 flex">
    <h1 className="text-3xl">Bike details</h1>
  </div>
  <div className="px-3 py-4 flex justify-center">
  <table className="w-full text-md bg-white shadow-md rounded mb-4">
      <tbody>
        <tr className="border-b">
          <th className="text-left p-3 px-5">Name</th>
          <th className="text-left p-3 px-5">Price</th>
          <th className="text-left p-3 px-5">Brand</th>
          <th className="text-left p-3 px-5">Category</th>
          <th className="text-left p-3 px-5">Description</th>
          <th />
        </tr>
        {
          bike.length > 0 && bike.map((us)=>{
            return (
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.name} className="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.price} classmaName="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
              <td className="p-3 px-5">
               <p>{us.brand}</p>
              </td>
              <td className="p-3 px-5">
               <p>{us.category}</p>
              </td>
              <td className="p-3 px-5">
               <p>{us.description}</p>
              </td>
              <td className="p-3 px-5 flex justify-end">
              <Link to={`/single/${us._id}`}> <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline ">See More</button></Link>
                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={()=>handleDelete(us._id)}>Delete</button>
              </td>
            </tr>
            )
          })
         }
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Bike
