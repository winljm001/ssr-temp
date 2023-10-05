'use client'
import React, { useContext, createContext, useState, SetStateAction, Dispatch } from 'react'
import './styles/default.css'
import './styles/dark.css'
export const themes = ['default', 'dark'] as const
export type ThemeType = (typeof themes)[number]
const defaultTheme: ThemeType = themes[0]
type themeType = { theme: ThemeType; setTheme: Dispatch<SetStateAction<ThemeType>> }
export const ThemeContext = createContext<themeType | null>({} as any)
export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext) as themeType
  return { theme, setTheme }
}

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default Theme
