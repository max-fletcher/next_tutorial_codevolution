"use client" // Needed so we can recover from the error generated

import { notFound } from "next/navigation"

// NOTE: this is if you are using destructuring
// const Review = ({params: {productId, reviewId}} : {params: { productId: string, reviewId: string }}) => {
//   return (
//     <div>Review for {productId} and review {reviewId}</div>
//   )
// }

const getRandomInt = (count: number) => { // For throwing errors and testing error.tsx. To see it, you need to run "npm run build" and "npm run start" in terminal.
  return Math.floor(Math.random() * count)
}

// NOTE: this is if you are NOT using destructuring
const Review = ({params} : {params: { productId: string, reviewId: string }}) => {

  // NOTE: For throwing errors and testing error.tsx. To see it, you need to run "npm run build" and "npm run start" in terminal.
  const random = getRandomInt(2)
  if(random === 1) throw new Error(`Loading Error Bruh`)

  if(parseInt(params.reviewId) > 1000)
    notFound() // Programatically go to Not Found Page. Will go to not-found inside "reviews" folder else, will default to not-found inside "app" folder

  return (
    <div>Review for {params.productId} and review {params.reviewId}</div>
  )
}

export default Review