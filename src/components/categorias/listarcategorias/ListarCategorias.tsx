import { useEffect, useState } from "react"
import type Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Services"
import CardCategorias from "../cardcategorias/CardCategorias"

function ListarCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    try {

      await buscar('/categoria', setCategorias)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <>
      <div className="flex justify-center w-full my-4">

        <div className="container flex flex-col mx-4">

          <h1 className="text-4xl text-center my-8 text-emerald-700 font-bold">
            Lista de Categorias
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {categorias.map((categoria) => (
              <CardCategorias
                key={categoria.id}
                categoria={categoria}
              />
            ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default ListarCategorias