import { cookies } from "next/headers"

export const defaultCache = "default-cache"
// NOTE: This will be used as default if a next: "{ revalidate: ??? }" option is not passed to a fetch call. Also, if this line is used in EITHER both the layout and page OR a page has both
// this config as well as a fetch call with next: "{ revalidate: ??? }" option passed, in both scenarios, the lowest one wins.
export const revalidate = 10

type Product = {
  id: string,
  title: string,
  price: string,
  description: string,
}

// REMEMBER FROM EARLIER LESSONS: 
// These are how you opt-out of cacheing. This is done when we are, say, returning values such as current time in the response:
// 1. Using dynamic mode in "Segment Config Option"
// 2. Using the Request object with the GET method
// 3. Using dynamic function like cookies(), headers() and searchParams(). Remember to use "fetch" API call after these functions are called, else, fetch will cache anyway without "no-cache" option.
// 4. using any HTTP method other than GET

const ProductsPage = async () => {

  // NOTE: By default, fetch in Next JS caches server data by default so anytime you refresh the page, Next JS will not do another server call so previous data will be shown, so if you change db.json data
  // and restart json-server and refresh the page, you will the same data and not the new data. The cache data is stored in ".next/cache" directory so deleting ".next" folder will force updated data to be fetched.
  // To clear cache, you have to delete .next and re-run the server.

  // NOTE: This is for testing 2 things: 
  // 1. cacheing and how to opt-out of it(cache: "no-cache").
  // 2. how when you make a request to the same URL using "fetch" both above and below a component tree, the server will not do the duplicate request at the bottom of the tree(i.e "/products" page which is /products/page)
  // and cache and use data from the top one(i.e here which is layout.tsx). Don't forget to comment out this same fetch call in layout.tsx when testing revalidate.
  const response = await fetch("http://localhost:3001/products", {
    next: {
      revalidate: 3
    }
    // cache: "no-cache" // This is the most straight-forward way to opt-out of cacheing i.e adding this option
  })
  const products = await response.json() // Unwrap response data

  // NOTE: This is also to opt-out of cacheing, but it opts-out only those "fetch" API calls that are below these lines.
  // const cookieStore = cookies()
  // const theme = cookieStore.get("theme")

  // NOTE: The block below is to demonstrate that the cache: "no-cache" doesn't behave the way you'd expect. If you have 2 fetch calls, you should place the ones with "no-cache" at the top and ones without it
  // at the bottom. In case you breach this rule, all fetch requests below the 1st fetch request with "no-cache" will not be cached at all despite not having "no-cache". Dunno why. Even Next JS docs don't address
  // this issue in their docs. Another way to overcome this issue is to use what is called "route segment configuration". Just use the line "export const defaultCache = "default-cache" at the top, delete the ".next" folder
  // then restart both frontend and backend servers, and the cache behaves as expected.
  const response2 = await fetch("http://localhost:3001/users", {
    // cache: "no-cache" // This is the most straight-forward way to opt-out of cacheing i.e adding this option
  })
  const users = await response2.json() // Unwrap response data
  // console.log(products, users);

  return (
    <>
      <h1 className="pl-4 pt-4 text-2xl">Products Page</h1>
      <ul className="space-y-4 p-4">
        {products.map((product: Product) => {
          return(
            <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-medium">${product.price}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductsPage