import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Chip, Typography } from '@mui/material'
import Layout from './page-container/layout.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/authPages/login.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Routes>
          <Route path="/chat/*" element={<Layout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
