"use client" // need this for "usePathname" to work
import Link from "next/link"
import { usePathname } from "next/navigation" // used to get current path url. See how it's used below.
import { useState } from "react"

// Metadata doesn't work with "use client" i.e throws an error
// export const metadata = {
//   title: 'Layout for product reviews only',
//   description: 'Layout for product reviews only',
// }

// The round brackets for the folder will be ignored by app-router so typing "http://localhost:3000/auth/with-auth-layout/login" would work if round brackets were absent
// but with round brackets aroung "auth" and "with-auth-layout", the route above will not be found. Its beacuse "auth" and "with-auth-layout" will be ignored so it becomes
// "http://localhost:3000/login"

const navLinks = [
  {name: "Register", href: "/register"},
  {name: "Login", href: "/login"},
  {name: "Forgot Password", href: "/forgot-password"}
]

function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname() // get current path url
  const [input, setInput] = useState("") // Used to demonstrate template

  return (
    <>
      <h2>Inner Layout</h2>
      {children}
      <br /><br />

      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href) // matches pathname with link.href value. Returns true if matches.
        console.log(pathname, link.href);
        return(
          <>
            <Link href={link.href} key={link.name} className={isActive ? "font-bold text-blue-500 mr-4" : "text-blue-400 mr-4"}>{link.name}</Link>
            <br />
          </>
        )
      })}

      {/* Used to demonstrate template */}
      <input value={input} onChange={e => setInput(e.target.value)} className="border-2 border-blue-400" />
    </>
  )
}

export default AuthLayout

// If you wish to directly export the layout

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <>
//       <h2>Inner Layout</h2>
//       {children}
//     </>
//   )
// }
