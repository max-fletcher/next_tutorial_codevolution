// NOTE: This is to demonstrate client-only code. If a component is supposed to interact with browser-specific features (e.g localStorage, window etc.), running it on the client
// will throw an error. As a result, its better to have this running this as client-only so it doesn't accidentally gets used in server only code.
import "client-only" // Importing this here so using this anywhere which doesn't have "use client" at the top will throw an error.

export const clientSideFunction = () => {

  // NOTE: The purpose of this utils file is for accessing localStorage, window etc.

  console.log(
    `
      use window object,
      use localStorage
    `
  );

  return "client result"
}