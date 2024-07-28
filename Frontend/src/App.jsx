import Layout from '../components/Layout'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import AdminDashboard from '../pages/AdminDashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<RegisterPage/>}/>
      <Route path="/sign-in" element={<LoginPage/>}/>
    </Routes>
    <Routes>
    <Route path="/dashboard" element={<AdminDashboard/>}/>
    </Routes>  
 
    </>
  )
}

export default App
