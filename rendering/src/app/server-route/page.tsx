// NOTE: This is to demonstrate server-only code. The purpose of server-only code is to be executed only on the server and may contain sensitive data(e.g API keys),
// sensitive code/logic, or a lot of code that may cause bloat/lag. This may cause performance issues, bottlenecks or leaks if exposed to the frontend so its best to protect them
// from being leaked to the frontend and hence, we are using a package called "server-only" that will prevent that. We pretend that the function "serverSideFunction" is one such function
// and we wish to use it here(i.e "/server-route") but prevent it from leaking to the client side(i.e "/client-route"). Check both routes to see the results.
import { serverSideFunction } from "@/utils/server-utils"
import ImageSlider from "@/utils/ImageSlider"; // We wrapped the slick carousel here into a separate component since slick carousel doesn't work in a server component. So we abstracted it to a separate client component
import { clientSideFunction } from "@/utils/client-utils";

const ServerRoutePage = () => {
  console.log("Server route rendered");
  // NOTE: Importing and calling the function from "/utils/server-utils".
  const result = serverSideFunction();
  // const clientResult = clientSideFunction(); // Wil throw an error since this here uses "client-only" package

  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>

      {/* We wrapped the slick carousel here into a separate component since slick carousel doesn't work in a server component. So we abstracted it to a separate client component */}
      <ImageSlider />

      {/* This will throw an error if not commented out since this is "client-only" */}
      {/* {clientResult} */}
    </>
  )
}

export default ServerRoutePage