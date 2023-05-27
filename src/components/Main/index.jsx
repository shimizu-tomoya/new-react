import { Inter } from 'next/font/google'
import styles from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/Links'
import { Headline } from 'src/components/Headline'
import { Header } from 'src/components/Header'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export function Main({ page }) {

  return (
      <main className={`${styles.main} ${inter.className}`}>
      <Header page={page} />
        <Headline page={page}/>
        <Links/>
      </main>
  )
}
