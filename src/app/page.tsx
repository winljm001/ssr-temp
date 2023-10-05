'use client'
import { useTheme } from '@/components/Theme/Theme'
import Image from 'next/image'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="bg-main">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold">当前主题{theme}</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
      <button
        onClick={() => {
          setTheme(theme === 'dark' ? 'default' : 'dark')
        }}
      >
        切换主题
      </button>
    </div>
  )
}
