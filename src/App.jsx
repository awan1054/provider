import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import Bike from './components/Bike';
import AddBike from './components/AddBike';
import Bookeddetails from './components/Bookeddetails';




function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/users" element={<Users />} />
<Route path="/bike" element={<Bike/>} />
<Route path="/addbike" element={<AddBike/>} />
<Route path="/bookedusers" element={<Bookeddetails/>} />
                
</Routes>
</div>
    </>
  )
}
export default App
