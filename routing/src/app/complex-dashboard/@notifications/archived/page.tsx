import Card from "@/components/card"
import Link from "next/link"

const ArchivedNotifications = () => {
  return (
    <>
      <Card>
        <div className="block">
          <div>Archived Notifications</div>
          <Link href="/complex-dashboard" className="text-blue-400">Default</Link>
        </div>
      </Card>
    </>
  )
}

export default ArchivedNotifications