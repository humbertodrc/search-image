import './App.css'
import Gallery from './components/Gallery/Gallery'
import Login from './pages/Login/Login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Gallery/>}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
