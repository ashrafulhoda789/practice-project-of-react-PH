import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'
import DaisyNavbar from './Components/DaisyNav/DaisyNavbar'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());

function App() {

  return (
    <>

      <header>
        <DaisyNavbar></DaisyNavbar>
      </header>

      <main className='w-11/12 mx-auto my-10'>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
