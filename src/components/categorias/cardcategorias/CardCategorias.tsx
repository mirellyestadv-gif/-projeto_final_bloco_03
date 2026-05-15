import type Categoria from "../../../models/Categoria"
import DeletarCategorias from "../deletarcategorias/DeletarCategorias"
import EditarCategorias from "../editarcategorias/EditarCategorias"

interface CardCategoriasProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {

  return (
    <>
      <div className="border flex flex-col rounded-lg p-4 bg-white shadow-md gap-4">

        <h1 className="text-2xl font-bold text-emerald-700 text-center">
          {categoria.nome}
        </h1>

        <EditarCategorias categoria={categoria} />

        <DeletarCategorias id={categoria.id} />

      </div>
    </>
  )
}

export default CardCategorias