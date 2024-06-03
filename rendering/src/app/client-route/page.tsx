"use client"

// NOTE: This is to demonstrate server-only code. The purpose of server-only code is to be executed only on the server and may contain sensitive data(e.g API keys),
// sensitive code/logic, or a lot of code that may cause bloat/lag. This may cause performance issues, bottlenecks or leaks if exposed to the frontend so its best to protect them
// from being leaked to the frontend and hence, we are using a package called "server-only" that will prevent that. We pretend that the function "serverSideFunction" is one such function
// and we wish to use it here(i.e "/client-route") but prevent it from leaking to the client side(i.e "/client-route"). Check both routes to see the results.

// import { serverSideFunction } from "@/utils/server-utils";
import ImageSlider from "@/utils/ImageSlider"; // This will work fine since this is a client component within a client component

const ClientRoutePage = () => {
  console.log("Client route rendered");
  // NOTE: Importing and calling the function from "/utils/server-utils".
  // const result = serverSideFunction();

  const settings = {
    dots: true,
  };
  return (
    <>
      <h1>Client Route Page</h1>
      {/* <p>{result}</p> */}

      {/* This will work fine since this is a client component within a client component */}
      <ImageSlider />
    </>
  )
}

export default ClientRoutePage