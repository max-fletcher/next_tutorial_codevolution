import { NextRequest } from "next/server" // NOTE: needed to extract request data
import { headers } from "next/headers" // NOTE: needed to extract headers data

export async function GET(request: NextRequest) {

  // const requestHeaders = new Headers(request.headers) // NOTE: While this works but using headers() function is less verboses
  // console.log(requestHeaders.get("Authorization"))

  const headersList = headers()

  console.log(headersList.get("Authorization"));
  

  // NOTE: Send back text/html data as per header specification. Will send back HTML data that can be viewed by the browser.
  return new Response("<h1> Profile API data </h1>", {
      headers: { "Content-Type" : "text/html" }
    }
  )
}