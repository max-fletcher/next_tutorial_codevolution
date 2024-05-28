import Link from "next/link"

// NOTE: For Demonstrating intercepting routes
const folder1 = () => {
  return (
    <>
      <h1 className="m-4">Folder1 Page</h1>
      <div className="mt-3">
        <Link href="folder1/folder2" className="text-blue-400 mr-4 px-3 py-2 border-2 border-blue-400 m-3">Goto Folder2</Link>
      </div>
    </>
  )
}

export default folder1