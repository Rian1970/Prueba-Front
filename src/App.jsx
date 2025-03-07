import Header from './components/header/Header'
import UserData from './components/userData/UserData'
import Objectives from './components/objectives/Objectives';
import Welcome from './components/welcome/Welcome';
import MedicalHistory from './components/MedicalHistory/MedicalHistory';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'

export default function App() {

  return (
    <>
      <Header />
      <Welcome />
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/Objectives" element={<Objectives />} />
        <Route path='/MedicalHistory' element={<MedicalHistory/>}/>
      </Routes>
    </>
  )
}

