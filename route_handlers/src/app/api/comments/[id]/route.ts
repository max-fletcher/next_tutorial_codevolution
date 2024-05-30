import { comments } from "../data";

// NOTE: 2nd param is supposed to be context, but we are destructuring it here to get route params from it
export async function GET(request: Request, { params }: { params: {id: string} }) {

  const findComment = comments.find(comment => comment.id === parseInt(params.id))

  return Response.json(findComment)
}

// NOTE: 2nd param is supposed to be context, but we are destructuring it here to get route params from it
export async function PATCH(request: Request, { params }: { params: {id: string} }) {

  const body = await request.json()
  const { text } = body

  const index = comments.findIndex(comment => comment.id === parseInt(params.id))
  comments[index].text = text

  return Response.json(comments[index], {
    status: 200 // In case you wish to send a status code other than 200(default)
  })
}

// NOTE: 2nd param is supposed to be context, but we are destructuring it here to get route params from it
export async function DELETE(request: Request, { params }: { params: {id: string} }) {

  const index = comments.findIndex(comment => comment.id === parseInt(params.id))
  const deletedComment = comments[index]

  if(!deletedComment){
    return Response.json({ message: "Comment Not Found" }, {
      status: 404 // In case you wish to send a status code other than 200(default)
    })
  }

  comments.splice(index, 1)

  return Response.json(deletedComment, {
    status: 200 // In case you wish to send a status code other than 200(default)
  })
}