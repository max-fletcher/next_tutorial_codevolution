import { comments } from "../data";

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