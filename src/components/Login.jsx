import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bikelogo from '../assets/bikelogo.webp';

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
      email: "", 
      password: ""
    });
    const [error, setError] = useState(""); // State for handling error messages

    const handleChange = (e) => {
      const { name, value } = e.target 
      setData({
        ...data, 
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3000/user/login", data);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          navigate("/"); // Navigate to home or dashboard
        } else {
          setError("Incorrect password!"); // Set error message if login fails
        }
      } catch (err) {
        setError("Incorrect password!"); // Handle error if login fails (e.g., incorrect password or network issues)
      }
    };

  return (
    <div>
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-5xl xl:text-4xl font-medium">
              Provider Login
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <form onSubmit={handleSubmit}>
                  <div className="relative mt-6">
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="Email Address" 
                      className="peer mt-2 w-full bg-transparent border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                      autoComplete="NA" 
                      onChange={handleChange} 
                    />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 bg-transparent transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                      Email Address
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="Password" 
                      className="peer peer mt-2 w-full bg-transparent border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                      onChange={handleChange} 
                    />
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                      Password
                    </label>
                  </div>
                  {error && <div className="text-red-600 text-sm mt-2">{error}</div>} {/* Display error message */}
                  <div className="flex items-center justify-between mt-8">
                    <button type="submit" className="btn flex items-center justify-center px-8 py-3 border border-transparent text-base font-normal rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center hidden lg:flex">
          <div 
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${bikelogo})` }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
