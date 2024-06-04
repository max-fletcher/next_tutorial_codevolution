type User = {
  id: string,
  name: string,
  username: string,
  email: string,
  phone: string,
}

const UsersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // delay resolving this component for 2 seconds so we can see loading.tsx
  const response = await fetch("https://jsonplaceholder.typicode.com/users") // For throwing error and showing error.tsx
  // const response = await fetch("https://jsonplaceholder.typicode.com/users") 
  const users = await response.json()
  console.log(users)

  return (
    <>
      <div className="grid grid-cols-2 gap-2 p-4">
        {users.map((user: User) => {
          return(
          <>
            <div key={user.id} className="flex justify-between align-center p-4 bg-white shadow rounded-lg text-gray-800">
              <div className="flex flex-col space-y-1">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <h2 className="text-sm">{user.username}</h2>
              </div>
              <div className="flex flex-col space-y-1 items-end">
                <div className="text-md">{user.email}</div>
                <div className="text-md">{user.phone}</div>
              </div>
            </div>
          </>)
        })}
      </div>
    </>
  )
}

export default UsersPage