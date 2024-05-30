import { comments } from "./data";

export async function GET() {
  return Response.json({ data: comments })
}
// TO get post body and 
export async function POST(request: Request) {
  // need to await in order to store request data in a variable(since it is promise based)
  const comment = await request.json()
  const newComment = { id: comments.length + 1, text: comment.text }
  comments.push(newComment)

  // "return Response.json({ data: comments })" always sends a status code of 200 so you need to send a new Response object to have a different status code
  // first params has to be JSON.stringified for new Response to be properly returned. I think that is how the signature of the Response class is.
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type" : "application/json"
    },
    status: 201
  })
}