// NOTE: These are how you opt-out of cacheing. This is done when we are, say, returning values such as current time in the response:
// 1. Using dynamic mode in "Segment Config Option"
// 2. Using the Request object with the GET method
// 3. Using dynamic function like cookies(), headers() and searchParams(). Remember to use "fetch" API call after these functions are called, else, fetch will cache anyway without "no-cache" option.
// 4. using any HTTP method other than GET

// Example of using dynamic mode in "Segment Config Option". Default value for dynamic is "auto", but we are changing it to "force-dynamic" to opt-out of cacheing
export const dynamic = "force-dynamic"

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}