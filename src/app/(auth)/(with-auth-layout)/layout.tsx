export const metadata = {
  title: 'Layout for product reviews only',
  description: 'Layout for product reviews only',
}

// The round brackets for the folder will be ignored by app-router so typing "http://localhost:3000/auth/with-auth-layout/login" would work if round brackets were absent
// but with round brackets aroung "auth" and "with-auth-layout", the route above will not be found. Its beacuse "auth" and "with-auth-layout" will be ignored so it becomes
// "http://localhost:3000/login"

function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Inner Layout</h2>
      {children}
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
