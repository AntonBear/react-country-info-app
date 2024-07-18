import axios from 'axios'
import { useState, useEffect } from 'react'
import { Filter } from './components/Filter'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { ALL_COUNTRIES } from './config'


function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  return (
    <>
      <Header />
      <Main>
        <Filter countries={countries} setCountries={setCountries} />
      </Main>
    </>
  )
}

export default App
