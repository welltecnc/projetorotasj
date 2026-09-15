import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <NavBar/>
        <main>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sobre" element={<Sobre/>}/>
              <Route path="/contato" element={<Contato/>}/>
              <Route path="/produtos" element={<Produtos/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
