import { useEffect, useState } from "react"
import { buscar } from "../../../services/Services"

import EditarProdutos from "../editarprodutos/EditarProdutos"
import DeletarProdutos from "../deletarprodutos/DeletarProdutos"

interface Categoria {
  id: number
  nome: string
}

interface Produto {
  id: number
  nome: string
  preco: number
  categoria: Categoria
}

function ListarProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  async function buscarProdutos() {
    try {

      await buscar('/produto', setProdutos)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscarProdutos()
  }, [produtos.length])

  return (
    <>
      <div className="flex justify-center w-full my-4">

        <div className="container flex flex-col mx-4">

          <h1 className="text-4xl text-center my-8 text-emerald-700 font-bold">
            Lista de Produtos
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {produtos.map((produto) => (

              <div
                key={produto.id}
                className="border flex flex-col rounded-lg p-4 bg-white shadow-md gap-2"
              >

                <h1 className="text-2xl font-bold text-cyan-600">
                  {produto.nome}
                </h1>

                <p className="text-lg">
                  Categoria: {produto.categoria?.nome}
                </p>

                <p className="text-lg font-semibold text-emerald-700">
                  R$ {produto.preco}
                </p>

                <EditarProdutos produto={produto} />

                <DeletarProdutos id={produto.id} />

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default ListarProdutos