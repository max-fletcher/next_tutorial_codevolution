"use client"

// NOTE: states and local storage can only be accessed by client components so we are using client components here
import { useState } from "react"

const Dashboard = () => {
  console.log('Dashboard client component');
  const [name, setName] = useState("")
  return (
    <>
      <h1>Dashboard</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} className="text-black" />
      <p>Hello, {name}!</p>
    </>
  )
}

export default Dashboard