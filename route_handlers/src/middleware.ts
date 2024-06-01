import { NextResponse, type NextRequest } from "next/server";

// NOTE: This is how you define a middleware in Next JS. For the Redirect/Conditinal redirect examples, try visiting "/api/hello2" and you will be redirected
// to "/api/hello" as per the conditions below.

// NOTE: Accepting the request that comes from the client(as per the standard for all middlewares)
export function middleware(request : NextRequest) {
  // NOTE: Create a response object that we will eventually either forward to the route file, or will return as a response. Before doing either, we attach a custom header to this.
  const response = NextResponse.next()
  // NOTE: Retrieving a user's theme preference from cookies
  const themePreference = request.cookies.get('theme')
  // NOTE: If no theme is preset in cookie, set a default value(dark)
  if(!themePreference){
    response.cookies.set('theme', 'dark')
  }
  // NOTE: Attach a header to the response before sending it back. Check network tab with "All" option selected and you'll see that document named "hello2" has a header with this name & value.
  response.headers.set('custom-header', 'custom-value')
  // NOTE: Send back the response
  return response

  // NOTE: (Conditinal redirect) This is one way to define which routes this middleware will be applied to.
  // if(request.nextUrl.pathname === "/api/hello2"){
  //   return NextResponse.redirect(new URL('/api/hello', request.url)) // new URL accepts 2 params. 1st param is the relative URL and 2nd is the base URL
  // }

  // NOTE: (Conditinal redirect) Same as above but returning "NextResponse.rewrite" instead of "NextResponse.redirect", which sends the user to "/api/hello" without changing the
  // URL in the browser(i.e "/api/hello2")
  // if(request.nextUrl.pathname === "/api/hello2"){
  //   return NextResponse.rewrite(new URL('/api/hello', request.url)) // new URL accepts 2 params. 1st param is the relative URL and 2nd is the base URL
  // }

  // NOTE: (Redirect)
  // return NextResponse.redirect(new URL('/api/hello', request.url)) // new URL accepts 2 params. 1st param is the relative URL and 2nd is the base URL
}

// NOTE: (Conditinal redirect) This is another(and preferred) way to define which routes this middleware will be applied to.
// export const config = {
//   matcher: "/api/hello2"
// }

