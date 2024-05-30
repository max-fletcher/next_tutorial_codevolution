import { NextRequest } from "next/server" // NOTE: needed to extract request data
import { headers, cookies } from "next/headers" // NOTE: needed to extract headers and cookies data

export async function GET(request: NextRequest) {

  // NOTE: 1st way for getting request header data. While this works but using headers() function is less verboses
  // const requestHeaders = new Headers(request.headers)
  // console.log(requestHeaders.get("Authorization"))

  // NOTE: 2nd and better way for getting request header data, since its less verbose.
  const headersList = headers()
  console.log(headersList.get("Authorization"));

  // NOTE: 1st way to get cookie data from the request.
  const theme = request.cookies.get("theme")
  console.log("theme cookie", theme);
  // NOTE: 2nd and better/less verbose way to get cookie data from the request.
  const colorScheme = cookies().get("colorScheme")
  console.log("colorScheme cookie", colorScheme);
  
  // NOTE: 2nd and better/less verbose way you can send data with cookies to frontend. This appends data
  cookies().set("colorScheme", "silver")

  // NOTE: This is how you send back data with header to the frontend. This will send back text/HTML data that can be viewed by the browser.
  // NOTE: 1st way you can send data with cookies to frontend by using "Set-Cookie". Open the cookies tab to see them.
  return new Response("<h1> Profile API data </h1>", {
      headers: { 
        "Content-Type" : "text/html",
        "Set-Cookie" : "theme=light"
      },
    }
  )
}