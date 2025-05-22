
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <section className='min-h-screen z-0 bg-blue-300'/>
    </main>
  )
}

export default App
