import { serverSideFunction } from "@/utils/server-utils"

const ServerRoutePage = () => {
  // NOTE: Importing and calling the function from "/utils/server-utils".
  const result = serverSideFunction();

  return (
    <>
      <div>Server Route Page</div>
    </>
  )
}

export default ServerRoutePage