export const metadata = {
  title: 'Layout for product reviews only',
  description: 'Layout for product reviews only',
}

const getRandomInt = (count: number) => { // For throwing errors and testing error.tsx. IMP: This doesn't work in conjunction with products/[productId]/error.tsx. See below for reason.
  return Math.floor(Math.random() * count)
}

function ProductLayout({ children }: { children: React.ReactNode }) {

  
  // NOTE: For throwing errors and testing error.tsx. IMP: This doesn't work in conjunction with products/[productId]/error.tsx because the layout files bubbles errors up the folder tree
  // and not below or on the same level. Hence, one solution is to place the error boundary 1 level up, or not throw errors in layout, or to handle errors using status code based filenames for error components
  const random = getRandomInt(2)
  if(random === 1) throw new Error(`Loading Error From Products`)

  return (
    <>
      <h2>Products Page</h2>
      {children}
    </>
  )
}

export default ProductLayout

// NOTE: If you wish to directly export the layout

// export default function ProductLayout({
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
