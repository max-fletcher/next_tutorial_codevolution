import Link from "next/link" // needs to be imported here in order for Link tag to work (for Navigation)

const Home = () => {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href="/blog">To Blog Page</Link>
      <br />
      <Link href="/products">To Products Page</Link>
    </>
  )
}

export default Home