// NOTE: This is to demonstrate server-only code. The purpose of server-only code is to be executed only on the server and may contain sensitive data(e.g API keys),
// sensitive code/logic, or a lot of code that may cause bloat/lag. This may cause performance issues, bottlenecks or leaks if exposed to the frontend so its best to protect them
// from being leaked to the frontend and hence, we are using a package called "server-only" that will prevent that. We pretend that the function "serverSideFunction" is one such function
// and we wish to use it here(i.e "/client-route") but prevent it from leaking to the client side(i.e "/client-route"). Check both routes to see the results.

import "server-only" // importing and making this a server-only function/component. Now, the application will throw an error until you remove/comment out this function in "/client-route"

export const serverSideFunction = () => {

  // NOTE: The purpose of this utils file is for the following:
  // use multiple libraries.
  // use environment variables,
  // interact with a database,
  // process confidential information

  console.log(
    `
      use multiple libraries.
      use environment variables,
      interact with a database,
      process confidential information
    `
  );

  return "server result"
}