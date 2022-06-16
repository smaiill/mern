import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  // const options = {
  //   method: 'post',
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   },
  //   credentials: "include",
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  // }

  // TODO: ADD CREDENTIALS FOR TOKEN SET

  const handleClick = async () => {
    // fetch('http://localhost:5000/api/users/login', options)
    await axios({
      method: 'post',
      url: 'http://localhost:5000/api/users/login',
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log('No token !'))
  }

  return (
    <div>
      <h1>login</h1>
      <input
        onChange={(e: any) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e: any) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login
