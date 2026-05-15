import { useState } from "react"
import type Categoria from "../../../models/Categoria"
import { atualizar } from "../../../services/Services"

interface EditarCategoriasProps {
  categoria: Categoria
}

function EditarCategorias({ categoria }: EditarCategoriasProps) {

  const [nome, setNome] = useState(categoria.nome)

  async function atualizarCategoria() {

    const categoriaAtualizada = {
      ...categoria,
      nome
    }

    try {

      await atualizar('/categoria', categoriaAtualizada, () => {})

      alert('Categoria atualizada com sucesso!')

    } catch (error) {
      alert('Erro ao atualizar categoria!')
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

        <button
          onClick={atualizarCategoria}
          className="rounded-lg text-white bg-yellow-500 hover:bg-yellow-700 py-2"
        >
          Editar
        </button>

      </div>
    </>
  )
}

export default EditarCategorias