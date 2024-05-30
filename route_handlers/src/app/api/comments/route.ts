import { comments } from "./data";

export async function GET() {
  return Response.json({ data: comments })
}

export async function POST(request: Request) {
  // need to await in order to store request data in a variable(since it is promise based)
  const comment = await request.json()
  const newComment = { id: comments.length + 1, text: comment.text }
  comments.push(newComment)

  // "return Response.json({ data: comments })" always sends a status code of 200 so you need to send a new Response object to have a different status code
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type" : "application/json"
    },
    status: 201
  })
}