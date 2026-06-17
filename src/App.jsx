import { useEffect, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Background} from './components/graph/Background'
import { Home } from './routes/Home.jsx'

function App() {

  return (
        <BrowserRouter>
          <Home />
        </BrowserRouter>
  )
}

export default App
