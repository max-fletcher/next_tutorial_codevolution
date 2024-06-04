"use client"

// NOTE: This is to demonstrate server-only and client-only code. Client-only code often interacts with localStorage, window, etc. so using the code/functions here on server-side will throw an error.
// Hence, we are using the "client-only" package to ensure this is not used anywhere that doesn't have "use client" defined at the top.
// Also, The purpose of server-only code is to be executed only on the server and may contain sensitive data(e.g API keys),
// sensitive code/logic, or a lot of code that may cause bloat/lag. This may cause performance issues, bottlenecks or leaks if exposed to the frontend so its best to protect them
// from being leaked to the frontend and hence, we are using a package called "server-only" that will prevent that. We pretend that the function "serverSideFunction" is one such function
// and we wish to demonstrate that using it here(i.e "/client-route") will throw an error, since "use client" is used at the top. Check both client-only and server-only routes to see the results.

// import { serverSideFunction } from "@/utils/server-utils";
import ImageSlider from "@/utils/ImageSlider"; // This will work fine since this is a client component within a client component
import { clientSideFunction } from "@/utils/client-utils";
import { useTheme } from "@/utils/theme-provider"; // Importing "useTheme" here so we can use what was passed down via the context provider in layouts.tsx

const ClientRoutePage = () => {

  const { defaultTheme, name, setName } = useTheme() // Binding useTheme to a variable

  // NOTE: Logging to see what we got from context
  console.log("colors", defaultTheme, defaultTheme?.colors.primary, name, setName);

  console.log("Client route rendered");
  // NOTE: Importing and calling the function from "/utils/server-utils".
  // const result = serverSideFunction();
  const clientResult = clientSideFunction();

  return (
    <>
      {/* NOTE: Using context to set color attribute for style of this element. We are using a color that is defined by "defaultTheme?.colors.primary" or by "defaultTheme?.colors.secondary" */}
      <h1 style={{color: defaultTheme?.colors.primary}}>Client Route Page</h1>
      {/* <p>{result}</p> */}

      {/* This will work fine since this is a client component within a client component */}
      <ImageSlider />
      {/* Should log a message in console like "use window object, use localStorage" */}
      <p>{clientResult}</p>
    </>
  )
}

export default ClientRoutePage