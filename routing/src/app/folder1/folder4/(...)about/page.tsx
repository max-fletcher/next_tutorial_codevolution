const InterceptedAbout = () => {
  return (
    // NOTE: This is a folder that uses intercepted routes. If you click "Goto About" in "/floder4" page, it comes here instead of the page.tsx defined in about/page.tsx.
    // You can, however, access this page on browser refresh, or if you access this route directly. The convention is to create a same folder-name with page as the intercepted route folder,
    // but prefixed with dots inside brackets based on the location of the intercerption route brackets i.e for this case, since folder3 is 1 level above folder4, the route has to be
    // prefixed with (..), so its (..)folder3. But for folder2 that has a link that intercepts folder1, the folder inside folder1 will be named (.)folder2 since the original folder2 is inside folder 1.
    // List of Intercepting route rules: 
    // (.) - to match segment on same level(i.e 1 folder inside another)
    // (..) - to match segment on one level above(i.e both folders is on the same level)
    // (..)(..) - currently it doesn't work(https://github.com/vercel/next.js/issues/49243), but its supposed to match segment two levels AnimationPlaybackEvent
    // (...) - to match segment from root app directory
    <h1>(...) Intercepted Folder 3 Page</h1>
  )
}

export default InterceptedAbout