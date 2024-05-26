import { Metadata } from "next"

export const metadata : Metadata = {
  title: 'Blog'
}

// NOTE: A function that delays and resolves a promise
export const delayLoading = async ():any => {
  // a var that will store the result of a promise. Imagine this to be a fetch/axios call to fetch data from an api endpoint.
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Delayed. Wait up homie.`)
    }, 5000)
  })
}

// We are awaiting delayLoading() here because we wish to see the loading component here
const Blog = async () => {
  await delayLoading()
  return (
    <div>Blog</div>
  )
}

export default Blog