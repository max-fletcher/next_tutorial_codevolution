// slug will be an array of strings
const Docs = ({params: {slug}} : {params: { slug: string[] }}) => {

  if(slug?.length >= 2){
    return (
      <div>
        <h1>Docs Home Page</h1>
        <h2>Catch all Routes</h2>
        <h1>Slug length lte 2</h1>
        {slug?.map((item, index) => {
          return (<div key={index}>Element: {index} | Item Name : {item}</div>)
        }
        )}
        <div>
          For all routes that have any path that starts with "localhost:3000/docs"
          i.e "localhost:3000/docs/feature" & "localhost:3000/docs/comment" & "localhost:3000/docs/feature/1" will navigate to the same page
        </div>
      </div>
    )
  }
  else if(slug?.length === 1){
    return (
      <div>
        <h1>Docs Home Page</h1>
        <h2>Catch all Routes</h2>
        <h1>Slug length eq 1</h1>
        {slug?.map((item, index) => {
          return (<div key={index}>Element: {index} | Item Name : {item}</div>)
        }
        )}
        <div>
          For all routes that have any path that starts with "localhost:3000/docs"
          i.e "localhost:3000/docs/feature" & "localhost:3000/docs/comment" & "localhost:3000/docs/feature/1" will navigate to the same page
        </div>
      </div>
    )
  }
  
  console.log('here2');
  return (
    <div>
      <h1>Docs Home Page</h1>
      <h2>Catch all Routes</h2>
      <h1>Slug length eq 0</h1>
      <div>
        For all routes that have any path that starts with "localhost:3000/docs"
        i.e "localhost:3000/docs/feature" & "localhost:3000/docs/comment" & "localhost:3000/docs/feature/1" will navigate to the same page
      </div>
    </div>
  )

}

export default Docs