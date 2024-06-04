"use client"

import { useState } from "react"
import ClientComponentTwo from "./client-component-two"

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {

  const [name, setName] = useState("Batman")
  console.log('Client Component One');

  return (
    <>
      <h1>Client Component One</h1>
      {/* Using children prop/slots/shared layouts */}
      {children}
    </>
  )
}

export default ClientComponentOne