export const metadata : Metadata = {
  // a title metadata can have these 3 segments:
  title: {
    absolute: 'Override layout title metadata', // Applied if not blank and if child routes don't have metadata titles i.e setting this on child overrides layout/parent metadata rules
  },
}

const Second = () => {
  return (
    <div>Second</div>
  )
}

export default Second