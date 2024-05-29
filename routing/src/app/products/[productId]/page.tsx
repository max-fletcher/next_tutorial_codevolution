import { Metadata } from "next"

type Props = {
  params:{ 
    productId : string 
  }
}

// NOTE: a simple function that dynamically generates metadata. The "({ params }: Props) : Promise<Metadata>" part defines that the function accepts params of type 'Props' 
// and that it should have a return of type Metadata after the promise is resolved(which is why imported at the top)
export const generateMetadata = async ({ params }: Props) : Promise<Metadata> => {
  // a var that will store the result of a promise. Imagine this to be a fetch/axios call to fetch data from an api endpoint.
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 1000)
  })
  return {
    title: `Product ${title}`
  }
}

// NOTE: Pass params as an argument. The ": {params:{ productId : string }}" is define type for typescript. It means, "params" is an object which contains a productId of type string
const ProductDetails = ({params}: Props) => {
  return (
    <h2>Product details for {params.productId}</h2>
  )
}

export default ProductDetails