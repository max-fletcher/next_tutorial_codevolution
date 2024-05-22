// :: this is if you are using destructuring
// const Review = ({params: {productId, reviewId}} : {params: { productId: string, reviewId: string }}) => {
//   return (
//     <div>Review for {productId} and review {reviewId}</div>
//   )
// }

import { notFound } from "next/navigation"

// :: this is if you are NOT using destructuring
const Review = ({params} : {params: { productId: string, reviewId: string }}) => {
  if(parseInt(params.reviewId) > 1000)
    notFound() // Programatically go to Not Found Page. Will go to not-found inside "reviews" folder else, will default to not-found inside "app" folder

  return (
    <div>Review for {params.productId} and review {params.reviewId}</div>
  )
}

export default Review