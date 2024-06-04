import ClientComponentOne from "@/components/client-component-one"
import ServerComponentOne from "@/components/server-component-one"

// NOTE: To test and demonstrate nesting client and server components inside each other. Although we cannot use server components inside client components(i.eby importign and using), there is a workaround,
// which is using childern props/slots/shared layout i.e passing a server component into a client component as children prop/slot(see example below). Importing and using server component inside client component 
// would otherwise throw an error.
const InterleavingComponents = () => {
  return (
    <>
      <div>Interleaving Components</div>
      {/* 
        <ServerComponentOne />
        <ClientComponentOne /> 
      */}

      {/* This is how we can use a server component in a client component. We pass a server component into a client component as children prop/slot. Importing and using would otherwise throw an error. */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  )
}

export default InterleavingComponents