
import './App.css'
import Navbar from './navbar.jsx'
import Home from './home.jsx'

function App() {
    const title="welcome to web app"
    const visits=50
  

  return (
    <>
      <Navbar/>
      <div className="content">
        <Home/>
        <h1>{title}</h1>
        <p>Visited {visits} times</p>
        <p>{Math.random()*20}</p>
        
          
      </div>
    
    </>
  
  )
}

export default App
