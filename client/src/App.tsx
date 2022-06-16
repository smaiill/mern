import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import Home from './components/views/Home'

function App() {

  const UidContext = createContext(null)
  const [uid, setUid] = useState(null)


  useEffect(() => {
    const fetchToken = async () => {

      await axios({
        method: 'post',
        url: `http://localhost:5000/api/users/jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data)
        })
        .catch((err) => console.log(err))
    }
    fetchToken()
  }, [])


  return (
    <div className="App">
      <UidContext.Provider value = {uid}>
        <Home />
      </UidContext.Provider>
    </div>
  )
}

export default App
