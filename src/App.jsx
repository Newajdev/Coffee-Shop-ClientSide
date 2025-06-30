
import { Link } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
      
      <button className='btn btn-success'><Link to={'/add-coffee'}>Add Coffe</Link></button>
      <button className='btn btn-secondary'><Link to={'/update-coffee'}>Update Coffe</Link></button>
      
    </>
  )
}

export default App
