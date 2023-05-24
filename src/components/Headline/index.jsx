import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'src/components/Headline/Headline.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline({page}) {
  return (
        <div className={styles.center}>
          <p>{page}.js</p>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
  )
}
