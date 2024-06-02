const Product = async () => {
  // NOTE: Intentionally rendering this component by 2 sec.
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <>
      <div>Products</div>
    </>
  )
}

export default Product