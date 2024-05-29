export const metadata = {
  title: 'Layout for product reviews only',
  description: 'Layout for product reviews only',
}

function ReviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  )
}

export default ReviewLayout

// NOTE: If you wish to directly export the layout

// export default function ReviewLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <>
//       {children}
//       <h2>Featured Products</h2>
//     </>
//   )
// }
