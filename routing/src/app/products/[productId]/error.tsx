"use client" // Error components must be Client Components
import { useEffect } from 'react'

// NOTE: Custom error page for showing instead the default non-understandable one. This needs to be a client component. Keep in mind that this will still use the layouts it encounters

// NOTE: Hard coded error. Works in dev AND production.
const ErrorBoundary = ({ error, reset } : { error: Error, reset: () => void }) => {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('error throws', error)
  }, [error])

  return (
    <>
      <div>Error form PRODUCT page Bro. WHAT THE HELL IS WRONG WITH YOU DOOD ??</div>
      <button onClick={reset} className='border-2 border-blue-400 bg-blue-300 px-2 py-1 mx-3 my-1 rounded'>
        Reset
      </button>
    </>
  )
}

// IMP: NOTE: If you wish to throw error with a custom error message. This doesn't work in production because apparantly, error message is stripped in production mode(i.e build and start)
// and replaced with a generic message so error details are not leaked
// const ErrorBoundary = ({error} : {error: Error}) => {

//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error('error throws', error)
//   }, [error])

//   return (
//     <div>{error.message}</div>
//   )
// }

export default ErrorBoundary