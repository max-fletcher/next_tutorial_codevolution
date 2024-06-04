import fs from 'fs' // This is a server-only operation. Comes from Node JS

const ServerComponentTwo = () => {

  fs.readFileSync("src/components/server-component-two.tsx", "utf-8")
  console.log('Server Component Two');

  return (
    <>
      <h1>Server Component Two</h1>
    </>
  )
}

export default ServerComponentTwo