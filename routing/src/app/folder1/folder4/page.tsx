import Link from "next/link"

const Folder4 = () => {

  return (
    <>
      <h1 className="m-4">Folder 4 Page</h1>
      <div className="mt-3">
        <Link href="/folder1/folder3" className="text-blue-400 mr-4 px-3 py-2 border-2 border-blue-400 m-3">Goto Folder3</Link>
        <Link href="/about" className="text-blue-400 mr-4 px-3 py-2 border-2 border-blue-400 m-3">Goto About</Link>
      </div>
    </>
  )
}

export default Folder4