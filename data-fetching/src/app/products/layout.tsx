// NOTE: remember the async at the beginning of this function
async function ProductsLayout({ children }: { children: React.ReactNode }) {

  // NOTE: This is to demonstrate that when you make a request to the same URL using "fetch" both above and below a component tree, the server will not do the duplicate request at the bottom of the tree
  // and cache and use data from the top one.
  const productsResponse = await fetch("http://localhost:3001/products", {
    // cache: "no-cache" // This is the most straight-forward way to opt-out of cacheing i.e adding this option
  })
  const products = productsResponse.json()
  console.log(products);

  return(
    <>
      <h2>Products Layout</h2>
      {children}
    </>
  )
}

export default ProductsLayout