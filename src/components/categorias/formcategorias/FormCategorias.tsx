import { useState } from "react"
import type Categoria from "../../../models/Categoria"
import { cadastrar } from "../../../services/Services"

function FormCategorias() {

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: ''
  })

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {

    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

  }

  async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    try {

      await cadastrar('/categoria', categoria, setCategoria)

      alert('Categoria cadastrada com sucesso!')

      setCategoria({
        id: 0,
        nome: ''
      })

    } catch (error) {
      alert('Erro ao cadastrar categoria!')
    }

  }

  return (
    <div className="flex justify-center my-4">

      <form
        className="flex flex-col w-1/2 gap-4"
        onSubmit={gerarNovaCategoria}
      >

        <h1 className="text-4xl text-center text-emerald-700 font-bold">
          Cadastro de Categoria
        </h1>

        <div className="flex flex-col gap-2">

          <label htmlFor="nome">
            Nome da Categoria
          </label>

          <input
            type="text"
            placeholder="Digite o nome da categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e) => atualizarEstado(e)}
          />

        </div>

        <button
          className="rounded text-white bg-emerald-700 hover:bg-emerald-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          Cadastrar
        </button>

      </form>

    </div>
  )
}

export default FormCategorias