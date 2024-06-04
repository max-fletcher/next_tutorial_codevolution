"use client"; // Remember that error handling components are always client components
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) { // We receive the error as a prop from Next JS
  // NOTE: We are just logging out the error in console using useEffect. Dunno why codevolution did it like this as a normal console.log also shows the error in console proper.
  useEffect(() => {
    console.error("From effect", `${error}`);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error fetching users data</div>
    </div>
  );
}