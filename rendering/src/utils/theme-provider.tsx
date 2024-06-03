"use client"

import { Theme, ThemeContextType } from "@/types/themes";
// IMP NOTE: In order to use context, we can't wrap the contents of layout with the context as context only works inside a client component and layout cannot be a client component.
// Hence, we have to abstract it to a separate client component like this, and wrap our layout with it. Then we can use it in any client component we wish. This is a weird abstraction, but it teaches us
// that when a particular aspect of React works on the client only but needs to be used in server components as well, we can always define a SLOT like this.
import { createContext, useContext, useState } from "react";

const defaultTheme : Theme = {
  colors:{
    primary: "#007bff",
    secondary: "#6c757d"
  },
}

const ThemeContext = createContext<ThemeContextType>({})

export const ThemeProvider = ({children} : {children: React.ReactNode}) => {

  const [name, setName] = useState("John Smith")

  console.log('From inside theme provider', name);

  return (
      <ThemeContext.Provider value={{defaultTheme, name, setName}}>
        {children}
      </ThemeContext.Provider>
  );
}

// NOTE: Although we can use this to initialize context in the component where we are using it, but we can also initialize it here and import it in the component and use it directly.
export const useTheme = () => useContext(ThemeContext)