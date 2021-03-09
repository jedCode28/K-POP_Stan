import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Bands from './components/Bands';
import BandForm from './components/BandForm'



function App() {
  const [showForm, setShowForm] =useState(false)
  const [editBand, setEditBand] = useState(null)


  return (
    <div>
      <Bands />

    </div>
  )
  
}

export default App;
