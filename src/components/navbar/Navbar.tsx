import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <>
      <div className="w-full bg-emerald-700 text-white flex justify-center py-4">

        <div className="container flex justify-between items-center text-lg">

          {/* LOGO + NOME */}
          <div className="flex items-center gap-2">

            <img
              src={logo}
              alt="FarmaMed"
              className="h-10 w-10 rounded-full"
            />

            <h1 className="text-2xl font-bold">
              Farmácia
            </h1>

          </div>

          {/* LINKS */}
          <div className="flex gap-4">

            <Link to="/" className="hover:underline">
              Home
            </Link>

            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>

            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>

          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar