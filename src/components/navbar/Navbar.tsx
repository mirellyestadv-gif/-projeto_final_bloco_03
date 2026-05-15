import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="w-full bg-emerald-700 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <h1 className="text-2xl font-bold">
            Farmácia
          </h1>

          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/categorias">Categorias</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar