"use client"
import { useRouter } from "next/navigation"; // Needed for programmatic navigation. Doesn't work with server component i.e throws error

const OrderProduct = () => {

  const router = useRouter() // binding useRouter toa variable. Doesn't work with server component i.e throws error

  const handleClick = () => {
    console.log('Handling Click Event');
    router.push("/") // navigate to home page
    // router.replace("/") // same as replace property in Link tag
    // router.back() // navigate back 1 step
    // router.forward() // navigate forward 1 step
  }


  return (
    <>
      <div>Order Produce</div>
      <h1>Order Product</h1>
      <button onClick={handleClick} className="mt-2 border-2 border-blue-400 bg-blue-200 px-2 py-1 rounded">Place Order</button>
    </>
  )
}

export default OrderProduct