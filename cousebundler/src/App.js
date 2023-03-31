import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/login/Login'
import Register from '../src/components/auth/register/Register'
import Courses from './components/couserse/Courses'
import Home from './components/home/Home'
import Footer from './components/layout/header/footer/Footer'
import Header from './components/layout/header/Header'
import Forgotpassword from './components/auth/forgotpassword/Forgotpassword'
import Resetpassword from './components/auth/reset/Resetpassword'
import Contact from './components/contact/Contact'
import Request from './components/request/Request'
import About from './components/about/About'
import Subscribe from './components/payment/Subscribe'
import Paymnetsucces from'./components/payment/Paymnetsucces'
import Paymnetfailed from'./components/payment/Paymnetfailed'
import Notfound from'./components/notfound/Notfound'
import Coursepage from './components/coursePage/Coursepage'
import Profile from './components/profile/Profile'
import Changepassword from './components/profile/Changepassword'
import Updateprofile from './components/profile/Updateprofile'
import Dashbord from './components/admin/dashbord/Dashbord'
import Createcourse from './components/admin/createcourse/Createcourse'
import AdminCourses from './components/admin/Admincouses/AdminCourses'
import User from './components/admin/users/User'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={  <Courses/>} />
        <Route path='/course/:id' element={  <Coursepage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/request' element={<Request/>} />

        <Route path='/profile' element={<Profile/>} />
        <Route path='/changepassword' element={<Changepassword/>} />
        <Route path='/updateprofile' element={<Updateprofile/>} />


        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/forgotpasssword' element={<Forgotpassword/>} />
        <Route path='/resetpassword/:token' element={<Resetpassword/>} />
        
        <Route path='/subscribe' element={<Subscribe/>} />
        <Route path='/paymnetsucces' element={<Paymnetsucces/>} />
        <Route path='/paymnetfailed' element={<Paymnetfailed/>} />
        <Route path='*' element={<Notfound/>} />



       { /* admin routes*/ }

       <Route path='/admin/dashbord' element={<Dashbord/>} />
       <Route path='/admin/createcourse' element={<Createcourse/>} />
       <Route path='/admin/courses' element={<AdminCourses/>} />
       <Route path='/admin/users' element={<User/>} />



      </Routes>
      <Footer/>
    </Router>

  )
}

export default App