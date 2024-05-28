// NOTE: To demonstrate paralles routing using slots. The benefit of using parallel route is that we can have independent loading and error handling for each component slot
// i.e if one component slot fails, it doesn't throw an error so it doesn't hang up the entire page and hence and only shows error response within its designated space/slot this results in
// easier maintenance, better UX(i.e having that slot behave like its own application within our application with their own loading states without unnecessary layout shifts/loading a.k.a sub-navigation)

export const metadata = {
  title: 'Layout for complex dashboard only',
  description: 'Layout for complex dashboard only',
}

// NOTE: Passing users, notifications and revenue into this layout as props instead of importing them
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
        {/* 
          NOTE: "Notifications" here is swapped with "ArchivedNotifications" and vice versa because of sub-navigation i.e Clicking on a Link on these pages("Default" & "Archived") 
          will mount the respective component without reloading the page and without affecting the other components(called unmatched components in this case for slots) even though URL is changed.
          However, if you refresh the page when you are in "archived notifications"(without default.tsx existing), you will see that it throws a "NotFound" error because Next.js finds "archived notifications", 
          but doesn't manage to find default slots for unmatched components(i.e "User Analytics" & "Revenue Metrics"). Hence, you need to define a default.tsx in order to have a fallback for "archived notifications"
          and any such sub-navigation slots. This is because "archived notifications" is inside @notifications and any other slot-based components inside @notifications will have the same behaviour,
          hence they need a default.tsx to function properly. (See this - https://www.youtube.com/watch?v=NPtnJ6Ivv9k&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=30)
        */}
        <div style={{ display: "flex", flex: 1 }}> {notifications} </div>
      </div>
    </>
  )
}

export default ComplexDashboardLayout