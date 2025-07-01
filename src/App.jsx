
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const Coffees = useLoaderData()
  const [Coffee, setCoffee] = useState(Coffees)


  return (
    <>

      <div className='m-6'>
        <button className='btn btn-success'><Link to={'/add-coffee'}>Add Coffe</Link></button>
        <h2>Total Coffee in your Store: {Coffees.length}</h2>
      </div>

      <div className="bg-[#F4F3F0] flex flex-col mx-auto justify-center items-center p-28">
        <div className='grid grid-cols-2 gap-6'>
          {
            Coffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} setCoffee={setCoffee} Coffee={Coffee}></CoffeeCard>)
          }
        </div>
      </div>

    </>
  )
}

export default App
