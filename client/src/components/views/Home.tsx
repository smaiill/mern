import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Login from '../login/Login'
import Register from '../register/Register'

const Home = () => {
  const [login, setLogin] = useState(false)

  const handleClick = () => {
    setLogin(!login)
  }

  return (
    <div>
      <button onClick={handleClick}>
        <h1>Change</h1>
      </button>
      {login ? <Login /> : <Register />}
    </div>
  )
}

export default Home
