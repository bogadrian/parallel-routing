import styles from './page.module.css';
import Link from 'next/link.js';

export default async function Home() {
  return (
    <main className={styles.main}>
      <div style={{ height: '40px' }}>
        <Link href="/login">
          <h1>Go to login</h1>
        </Link>

        <Link href="/dashboard">
          <h1>Go to dashboard</h1>
        </Link>
      </div>
    </main>
  );
}
