import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from './components/views/Home'
import uidContext from './components/contexts/uidContext'

function App() {
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
        .catch((err) => console.error(err))
    }
    fetchToken()
  }, [])

  return (
    <div className="App">
      <uidContext.Provider value={uid}>
        <Home />
      </uidContext.Provider>
    </div>
  )
}

export default App
