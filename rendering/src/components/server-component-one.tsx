import fs from 'fs' // This is a server-only operation. Comes from Node JS
import ServerComponentTwo from './server-component-two'

const ServerComponentOne = () => {

  fs.readFileSync("src/components/server-component-one.tsx", "utf-8")
  console.log('Server Component One');

  return (
    <>
      <h1>Server Component One</h1>
      <ServerComponentTwo />
    </>
  )
}

export default ServerComponentOne