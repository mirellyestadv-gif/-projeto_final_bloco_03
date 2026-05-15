import { deletar } from "../../../services/Services"

interface DeletarCategoriasProps {
  id: number
}

function DeletarCategorias({ id }: DeletarCategoriasProps) {

  async function deletarCategoria() {

    try {

      await deletar(`/categoria/${id}`)

      alert('Categoria apagada com sucesso!')

    } catch (error) {
      alert('Erro ao apagar categoria!')
    }

  }

  return (
    <>
      <button
        onClick={deletarCategoria}
        className="border rounded-lg text-white bg-red-500 hover:bg-red-700 w-full py-2"
      >
        Deletar
      </button>
    </>
  )
}

export default DeletarCategorias