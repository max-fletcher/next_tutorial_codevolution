import { comments } from "../data";

// 2nd param is supposed to be context, but we are destructuring it here to get params from it
export async function GET(request: Request, { params }: { params: {id: string} }) {

  const findComment = comments.find(comment => comment.id === parseInt(params.id))

  return Response.json(findComment)
}