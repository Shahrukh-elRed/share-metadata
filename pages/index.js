import Profile from '@/components/Profile'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Profile />
    </>
  )
}
