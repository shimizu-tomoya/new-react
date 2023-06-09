import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'src/components/Header/Header.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/about",label:"About"}
];

export function Header({page}) {
  return (
    <div className={styles.description}>
      <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/{page}.js</code>
      </p>
      <div className={styles.link}>
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  )
}
