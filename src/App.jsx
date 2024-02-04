import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import FormDetails from './components/FormDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/form-details' element={<FormDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
