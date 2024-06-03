"use client"

// NOTE: This is to demonstrate server-only code. The purpose of server-only code is to be executed only on the server and may contain sensitive data(e.g API keys),
// sensitive code/logic, or a lot of code that may cause bloat/lag. This may cause performance issues, bottlenecks or leaks if exposed to the frontend so its best to protect them
// from being leaked to the frontend and hence, we are using a package called "server-only" that will prevent that. We pretend that the function "serverSideFunction" is one such function
// and we wish to use it here(i.e "/client-route") but prevent it from leaking to the client side(i.e "/client-route"). Check both routes to see the results.

// import { serverSideFunction } from "@/utils/server-utils";
import ImageSlider from "@/utils/ImageSlider"; // This will work fine since this is a client component within a client component
import { useTheme } from "@/utils/theme-provider"; // Importing "useTheme" here so we can use what was passed down via the context provider in layouts.tsx

const ClientRoutePage = () => {

  const { defaultTheme, name, setName } = useTheme() // Binding useTheme to a variable

  // NOTE: Logging to see what we got from context
  console.log("colors", defaultTheme, defaultTheme?.colors.primary, name, setName);

  console.log("Client route rendered");
  // NOTE: Importing and calling the function from "/utils/server-utils".
  // const result = serverSideFunction();

  return (
    <>
      {/* NOTE: Using context to set color attribute for style of this element. We are using a color that is defined by "defaultTheme?.colors.primary" or by "defaultTheme?.colors.secondary" */}
      <h1 style={{color: defaultTheme?.colors.primary}}>Client Route Page</h1>
      {/* <p>{result}</p> */}

      {/* This will work fine since this is a client component within a client component */}
      <ImageSlider />
    </>
  )
}

export default ClientRoutePage