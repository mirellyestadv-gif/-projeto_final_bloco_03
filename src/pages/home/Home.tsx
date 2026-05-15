function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-emerald-100 p-6">

      {/* TEXTO */}
      <div className="text-center mb-8">

        <h1 className="text-6xl font-bold text-emerald-800">
          Bem-vindo à FarmaMed
        </h1>

        <p className="text-xl mt-4 text-emerald-700">
          Controle completo de categorias farmacêuticas
        </p>

      </div>

      {/* IMAGEM COM ANIMAÇÃO */}
      <img
        src="/logo.png"
        alt="FarmaMed"
        className="w-[350px] rounded-3xl shadow-xl animate-[float_4s_ease-in-out_infinite]"
      />

    </div>
  )
}

export default Home
