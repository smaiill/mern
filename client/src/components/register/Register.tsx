import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      email,
      password,
      username: 'niiy',
    }),
  }

  const handleClick = () => {
    fetch('http://localhost:5000/api/users/register', options)
  }

  return (
    <div>
      <h1>Register</h1>
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

export default Register
