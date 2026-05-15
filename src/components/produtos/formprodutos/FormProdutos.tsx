import { useState } from "react"
import { cadastrar } from "../../../services/Services"

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

function FormProdutos() {

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    categoria: {
      id: 0,
      nome: ''
    }
  })

  function atualizarEstado(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    setProduto({
      ...produto,
      [e.target.name]: e.target.value
    })

  }

  async function gerarNovoProduto(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault()

    try {

      await cadastrar('/produto', produto, () => {})

      alert('Produto cadastrado com sucesso!')

      window.location.reload()

    } catch (error) {
      alert('Erro ao cadastrar produto!')
    }

  }

  return (
    <>
      <div className="flex justify-center my-4">

        <form
          className="flex flex-col w-1/2 gap-4"
          onSubmit={gerarNovoProduto}
        >

          <h1 className="text-4xl text-center text-emerald-700 font-bold">
            Cadastro de Produto
          </h1>

          <input
            type="text"
            placeholder="Nome do produto"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={produto.nome}
            onChange={(e) => atualizarEstado(e)}
          />

          <input
            type="number"
            placeholder="Preço"
            name="preco"
            className="border-2 border-slate-700 rounded p-2"
            value={produto.preco}
            onChange={(e) => atualizarEstado(e)}
          />

          <input
            type="number"
            placeholder="ID da Categoria"
            name="categoria"
            className="border-2 border-slate-700 rounded p-2"
            onChange={(e) =>
              setProduto({
                ...produto,
                categoria: {
                  id: Number(e.target.value),
                  nome: ''
                }
              })
            }
          />

          <button
            className="rounded text-white bg-emerald-700 hover:bg-emerald-800 py-2"
            type="submit"
          >
            Cadastrar
          </button>

        </form>

      </div>
    </>
  )
}

export default FormProdutos