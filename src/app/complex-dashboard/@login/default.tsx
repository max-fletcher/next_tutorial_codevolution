// if 'isLogged' is false, then going to "/complex-dashboard/archived" goes to "not-found" page(src/app/not-found.tsx). This component is the fallback
// for that scenario.

import Card from "@/components/card"

const DefaultLogin = () => {
  return (
    <Card>Pleas login to continue</Card>
  )
}

export default DefaultLogin