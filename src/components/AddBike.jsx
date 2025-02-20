import { useState } from "react";  
import axios from "axios";        
import Navabar from "./Navbar";   

function AddBike() {   

  // State variables
  const [name, setName] = useState("");    
  const [price, setPrice] = useState("");  
  const [category, setCategory] = useState("");  
  const [description, setDescription] = useState("");  
  const [image, setImage] = useState("");  
  const [brand, setBrand] = useState(""); 
  

  // Function to handle form submission
  const createBike = async (e) => {   
    e.preventDefault();    

    const response = await axios.post(  
      "http://localhost:3000/bike/add-bike",  
      {  
        name,  
        price,  
        category,  
        image,  
        brand,  
        description,  
      },  
      {  
        headers: {  
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",  
        },  
      }  
    );  

    if (response.status === 201) {  
      alert("Bike added successfully");
      window.location.href = response.data.url;
      

    } else {  
      alert("Something went wrong");  
    }  
  };  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };


  return (  
    <>  
      <Navabar />  

      <div className="mx-auto mt-10 border-2 border-blue-400 rounded-lg w-11/12 p-8">  
        <div className="text-center font-bold text-2xl mb-5">Add Bike</div>  
        <div className="text-center text-4xl font-bold mb-5">  
          You can add bike here  
        </div>  

        <form onSubmit={createBike} className="flex flex-col gap-4">  

          <input  
            type="text"  
            className="p-4 border rounded-md w-full"  
            placeholder="Enter Name *"  
            onChange={(e) => setName(e.target.value)}  
          />  

          <input  
            type="text"  
            className="p-4 border rounded-md w-full"  
            placeholder="Enter Price*"  
            onChange={(e) => setPrice(e.target.value)}  
          />  

          <input  
            type="text"  
            className="p-4 border rounded-md w-full"  
            placeholder="Enter Category *"  
            onChange={(e) => setCategory(e.target.value)}  
          />  

          <input  
            type="text"  
            className="p-4 border rounded-md w-full"  
            placeholder="Enter Brand *"  
            onChange={(e) => setBrand(e.target.value)}  
          />  

          <label className="w-full">  
            Bike Image:  
            <input  
              type="file"   name='image'
              className="mt-1 block w-full p-4 border rounded-md"  
              onChange={handleImageChange}
            />  
          </label>  

          <textarea  
            className="w-full p-4 border rounded-md"  
            rows="4"  
            placeholder="Description"  
            onChange={(e) => setDescription(e.target.value)}  
          ></textarea>  

          <div className="text-center mt-5">  
            <button  
              type="submit"  
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg">  
              Add Bike  
            </button>  
          </div>  

        </form>  
      </div>  
    </>  
  );  
}  

export default AddBike;  
