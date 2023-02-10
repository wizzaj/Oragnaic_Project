
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Data from './Component/Data'
import Login from './Component/Login'

function App() {

  return (
    <div className="App">
      <Routes>
         <Route exact path='/'element={<Login/>}/>
         <Route path="/data" element={<Data/>}/>
      </Routes>
    </div>
  )
}

export default App
