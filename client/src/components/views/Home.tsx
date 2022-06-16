import React, { useContext } from 'react'
import uidContext from '../contexts/uidContext'

const Home: React.FC = () => {
  const uid = useContext<string | null>(uidContext)

  return (
    <div>
      <h1>Hello world.</h1>
      {uid ? <h1>Connected !</h1> : <h1>Not conneted !</h1>}
    </div>
  )
}

export default Home
