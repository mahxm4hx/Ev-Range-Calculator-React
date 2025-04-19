// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Calculation from './components/Calculation'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
     <Route
          path="/About"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
      <Route
          path="/Calculation"
          element={
            <>
              <Calculation />
              <Footer />
            </>
          }
        />
      <Route
          path="/Contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  )
}

export default App
