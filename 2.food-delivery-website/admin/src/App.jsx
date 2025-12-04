import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
