import Product from "@/components/product" // NOTE: These are delayed by using a setTimeout. See inside.
import Reviews from "@/components/reviews" // NOTE: These are delayed by using a setTimeout. See inside.
import { Suspense } from "react"

const ProductDetail = () => {
  return (
    <>
      <div>Product Detail Page</div>
      {/* NOTE: Streaming. Wrapping delayed components in a suspense to enable streaming for them. This means the page will be rendered immediately without waiting for the Product and Reviews component
        to finish their async promises to resolve(i.e API calls or otherwise) and once their promises are resolved, the component will be streamed to the browser and placed into the correct spots on the page.
        Remember that are we wrapping this component with Suspense instead of using a loading.tsx because this is a streamed component. For streamed and client-side components, we will need Suspense and 
        ErrorBoundary tags instead of loading.tsx for things to work properly. */}
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading product reviews...</p>}>
        <Reviews />
      </Suspense>
    </>
  )
}

export default ProductDetail