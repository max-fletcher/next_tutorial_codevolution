export type Theme = {
  colors: {
    primary: string,
    secondary: string
  },
}

export type ThemeContextType = {
  defaultTheme?: Theme,
  name?: string,
  setName?: Function
}