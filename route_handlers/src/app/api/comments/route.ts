import { NextRequest } from "next/server";
import { comments } from "./data";

// IMP NOTE: import and use "NextRequest" from which we can extract query params from the request object. Hence, the rule of thumb is: 
// 1. when you don't need to use query params, but need context(e.g to extract route params from it.), you use type "Request" i.e -> 
//      export async function GET(request: Request, { params }: { params: {id: string} }) {
//          ...
//            const { type } = params
//          ...
//       }
// 2. when you need to use query params, but don't need context(i.e no route params present but may have query params present), you use type "NextRequest" i.e -> 
//      export async function GET(request: NextRequest) {
//          ...
//            const searchParams = request.nextUrl.searchParams
//            const limit = searchParams.get("limit")
//            const offset = searchParams.get("offset")
//          ...
//       }
// 3. when you need both, use a combination of NextRequest and context params(i.e has both route params and query params present), you use type "NextRequest" with { params } i.e -> 
//      export async function GET(request: NextRequest, { params }: { params: {id: string} }) { 
//          ...
//            const { type } = params
//          ...
//            const searchParams = request.nextUrl.searchParams
//            const limit = searchParams.get("limit")
//            const offset = searchParams.get("offset")
//          ...
//       }
export async function GET(request: NextRequest) {
  // NOTE: this is how you get query params from URL
  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get("search")

  // NOTE: Good ol' procedural way
  // let filteredComments = []
  // if(search){
  //   filteredComments = comments.filter((comment) => {
  //     if(comment.text.indexOf(search) !== -1)
  //       return comment
  //   })
  // }
  // else{
  //   filteredComments = comments
  // }

  // NOTE: Shortened Way. Replaces block above.
  let filteredComments = search ? 
                          comments.filter((comment) => {
                            if(comment.text.includes(search))
                              return comment
                          })
                          : 
                          comments

  return Response.json({ data: filteredComments })
}
// NOTE: To get post body and 
export async function POST(request: Request) {
  // NOTE: need to await in order to store request data in a variable(since it is promise based)
  const comment = await request.json()
  const newComment = { id: comments.length + 1, text: comment.text }
  comments.push(newComment)

  // NOTE: "return Response.json({ data: comments })" always sends a status code of 200 so you need to send a new Response object to have a different status code
  // first params has to be JSON.stringified for new Response to be properly returned. I think that is how the signature of the Response class is.
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type" : "application/json"
    },
    status: 201
  })
}