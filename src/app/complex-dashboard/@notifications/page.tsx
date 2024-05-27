import Card from "@/components/card"
import Link from "next/link"

const Notifications = () => {
  return (
    <>
      <Card>
        <div className="block">
          <div>Notifications</div>
          <Link href="/complex-dashboard/archived" className="text-blue-400">Achieved</Link>
        </div>
      </Card>
    </>
  )
}

export default Notifications