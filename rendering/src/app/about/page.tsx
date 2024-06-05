import { cookies } from "next/headers";

const About = () => {
  console.log('About server component');

  // NOTE: This will force the page-content to load dynamically as opposed to being rendered statically. The advantage for dynamically rendered pages is that cacheing is disabled and certain things
  // like "Time" is not cached. Just remember to use these function before the "fetch" API call, else cacheing is not disabled. Using dynamic functions like cookies(), headers() and searchParams()
  // can also force components to be dynamic. Also remember that this is still a server component so the console.logs will only be shown in the terminal and not in the browser.
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")
  console.log(theme);

  return (
    <div>About page {new Date().toLocaleTimeString()}</div>
  )
}

export default About