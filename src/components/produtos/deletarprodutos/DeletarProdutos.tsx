import { deletar } from "../../../services/Services"

interface DeletarProdutosProps {
  id: number
}

function DeletarProdutos({ id }: DeletarProdutosProps) {

  async function deletarProduto() {

    try {

      await deletar(`/produto/${id}`)

      alert('Produto apagado com sucesso!')

      window.location.reload()

    } catch (error) {
      alert('Erro ao apagar produto!')
    }

  }

  return (
    <>
      <button
        onClick={deletarProduto}
        className="border rounded-lg text-white bg-red-500 hover:bg-red-700 py-2"
      >
        Deletar
      </button>
    </>
  )
}

export default DeletarProdutos