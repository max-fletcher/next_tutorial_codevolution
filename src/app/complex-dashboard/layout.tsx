// To demonstrate paralles routing using slots. The benefit of using parallel route is that we can have independent loading and error handling for each component slot
// i.e if one component slot fails, it doesn't throw an error so it doesn't hang up the entire page and hence and only shows error response within its designated space/slot this results in
// easier maintenance, better UX(i.e having that slot behave like its own application within our application with their own loading states without unnecessary layout shifts/loading a.k.a subnavigation)

export const metadata = {
  title: 'Layout for complex dashboard only',
  description: 'Layout for complex dashboard only',
}

// Passing users, notifications and revenue into this layout as props instead of importing them
function ComplexDashboardLayout({ 
  children, 
  users, 
  notifications, 
  revenue 
}: { 
  children: React.ReactNode, 
  users: React.ReactNode, 
  notifications: React.ReactNode, 
  revenue: React.ReactNode 
}) {
  return (
    <>
      <h2>Complex Dashboard Layout</h2>
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div> {users} </div>
          <div> {revenue} </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}> {notifications} </div>
      </div>
    </>
  )
}

export default ComplexDashboardLayout