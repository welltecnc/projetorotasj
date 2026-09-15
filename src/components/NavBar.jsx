import {Link} from 'react-router-dom'
import {Home,Info,Mail,Package} from 'lucide-react'

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className='max-w-6xl mx-auto px-4'>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold ">Projeto</span>
          </div>

          <div className="hidden md:flex space-x-2 items-center">
            <Link to="/"className="flex items-center gap-2 py-2 rounded-2xl"><Home />Home</Link>
            <Link to="/sobre" className="flex items-center gap-2 py-2 rounded-2xl"><Info />Sobre</Link>
            <Link to="/produtos" className="flex items-center gap-2 py-2 rounded-2xl"><Package />Produtos</Link>
            <Link to="/contato" className="flex items-center gap-2 py-2 rounded-2xl" ><Mail />Contato</Link>
          </div>
        </div>

        </div>
        
      
    </nav>
  )
}

export default NavBar
