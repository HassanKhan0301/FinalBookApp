import React from 'react'
import Home from './home/Home'

import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Contacts from './contact/Contacts'
import Signup from './components/Signup'

function App() {
  return (
<>
{/* <Home/>
<Course/> */}
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/course' element={<Courses/>}/>
  <Route path='/contact' element={<Contacts/>}/>
  <Route path='/singnup' element={<Signup/>}/>
</Routes>

</>
  )
}

export default App