

// Pass params as an argument. The ": {params:{ productId : string }}" is define type for typescript. It means, "params" is an object which contains a productId of type string
const ProductDetails = ({params} : {params:{ productId : string }}) => {
  return (
    <h2>Product details for {params.productId}</h2>
  )
}

export default ProductDetails