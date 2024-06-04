// NOTE: To demonstrate paralles routing using children porps/slots/shared layout. The benefit of using parallel route is that we can have independent loading and error handling for each component slot
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
  revenue,
  login
}: { 
  children: React.ReactNode, 
  users: React.ReactNode, 
  notifications: React.ReactNode, 
  revenue: React.ReactNode,
  login: React.ReactNode 
}) {

  const loggedIn = false // in real life, we should get this from storage/cookie/axios call etc.

  return loggedIn ?  (
    <>
      <h2>Complex Dashboard Layout</h2>
      {children}
      {/* Conditionally rendering using ternary. This is to demonstrate that you can also render porps/slots/shared layout based on conditions. */}
      (<div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div> {users} </div>
          <div> {revenue} </div>
        </div>
        {/* 
          NOTE: This is for demonstrating unmatched routes for slots in parallel routing.
          "Notifications" here is swapped with "ArchivedNotifications" and vice versa because of sub-navigation i.e Clicking on a Link on these pages("Default" & "Archived") 
          will mount the respective component without reloading the page and without affecting the other components(called unmatched components in this case for porps/slots) even though URL is changed.
          However, if you refresh the page when you are in "archived notifications"(without default.tsx existing), you will see that it throws a "NotFound" error because Next.js finds "archived notifications", 
          but doesn't manage to find default porps/slots for unmatched components(i.e "User Analytics" & "Revenue Metrics"). Hence, you need to define a default.tsx in order to have a fallback for "archived notifications"
          and any such sub-navigation porps/slots. This is because "archived notifications" is inside @notifications and any other slot-based components inside @notifications will have the same behaviour,
          hence they need a default.tsx to function properly. (See this - https://www.youtube.com/watch?v=NPtnJ6Ivv9k&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=30)

          IMP NOTE: A very important issue that is STILL ACTIVE is when you use a loading.tsx inside the folder of parallel routes. It has an active github issue but
          was ignored by the maintainers. The workaround is that you use a route group (i.e instead of making ~complex-dashboard/@notifications/page and 
          ~complex-dashboard/@notifications/loading, we make ~complex-dashboard/@notifications/(notifications)/page and ~complex-dashboard/@notifications/(notifications)/loading
          and since route groups don't show in URL, it fixes the issue completely.
        */}
        <div style={{ display: "flex", flex: 1 }}> {notifications} </div>
      </div>)
    </>
  ) : (
    login
  )
}

export default ComplexDashboardLayout