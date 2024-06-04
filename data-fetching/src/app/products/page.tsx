type Product = {
  id: string,
  title: string,
  price: string,
  description: string,
}

const ProductsPage = async () => {

  // NOTE: By default, fetch in Next JS caches server data by default so anytime you refresh the page, Next JS will not do another server call so previous data will be shown, so if you change db.json data
  // and restart json-server and refresh the page, you will the same data and not the new data
  const response = await fetch("http://localhost:3001/products")
  const products = await response.json()

  console.log(products);

  return (
    <>
      <h1 className="pl-4 pt-4 text-2xl">Products Page</h1>
      <ul className="space-y-4 p-4">
        {products.map((product: Product) => {
          return(
            <>
              <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p>{product.description}</p>
                <p className="text-lg font-medium">${product.price}</p>
              </li>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default ProductsPage