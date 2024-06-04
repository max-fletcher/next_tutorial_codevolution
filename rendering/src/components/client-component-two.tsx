"use client"

import { useState } from "react"

const ClientComponentTwo = () => {

  const [name, setName] = useState("Robin")
  console.log('Client Component Two');

  return (
    <>
      <h1>Client Component Two</h1>
    </>
  )
}

export default ClientComponentTwo