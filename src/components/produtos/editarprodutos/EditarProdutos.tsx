import { useState } from "react"
import { atualizar } from "../../../services/Services"

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

interface EditarProdutosProps {
  produto: Produto
}

function EditarProdutos({ produto }: EditarProdutosProps) {

  const [nome, setNome] = useState(produto.nome)
  const [preco, setPreco] = useState(produto.preco)

  async function atualizarProduto() {

    const produtoAtualizado = {
      ...produto,
      nome,
      preco
    }

    try {

      await atualizar('/produto', produtoAtualizado, () => {})

      alert('Produto atualizado com sucesso!')

      window.location.reload()

    } catch (error) {
      alert('Erro ao atualizar produto!')
    }

  }

  return (
    <>
      <div className="flex flex-col gap-2">

        <input
          type="text"
          className="border-2 border-slate-700 rounded p-2"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          className="border-2 border-slate-700 rounded p-2"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
        />

        <button
          onClick={atualizarProduto}
          className="rounded text-white bg-yellow-500 hover:bg-yellow-700 py-2"
        >
          Editar
        </button>

      </div>
    </>
  )
}

export default EditarProdutos