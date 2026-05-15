function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="bg-emerald-800 text-white flex justify-center py-4">
        <p className="text-lg">
          FarmaMed | Mirelly Santos | Copyright: {data}
        </p>
      </div>
    </>
  )
}

export default Footer