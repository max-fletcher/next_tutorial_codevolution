import { Metadata } from "next"

export const metadata : Metadata = {
  title: 'Blog'
}


// We are awaiting delayLoading() here because we wish to see the loading component here
const Blog = async () => {
  const delayLoading = async (): Promise<string> => {
    // a var that will store the result of a promise. Imagine this to be a fetch/axios call to fetch data from an api endpoint.
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Delayed')
      }, 5000)
    })
  }
  await delayLoading()
  return (
    <div>Blog</div>
  )
}

export default Blog