

import Header from './components/Header';
import UrlForm from './components/UrlForm';
import Footer from './components/Footer';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.hero__content}>
              <h1 className={styles.hero__title}>More than just shorter links</h1>
              <p className={styles.hero__subtitle}>
                Build your  recognition and get detailed insights on how your links are performing.
              </p>
              <Link href="/signup" className={styles.hero__button}>
                Get Started
              </Link>
            </div>
            <div className={styles.hero__image}>
              <Image
                src="/illustration-working.svg"
                alt="Person working at desk"
                width={733}
                height={482}
                priority
              />
            </div>
          </div>
          <UrlForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}


{/* <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">URL Shortener</h1>
      <p className="text-xl mb-8">Create short, memorable links in seconds</p>
      <div className="flex flex-col items-center gap-4">
        <input 
          type="text" 
          placeholder="Enter your URL here" 
          className="px-4 py-2 border rounded-md w-80"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Shorten URL
        </button>
      </div>
    </main> */}
