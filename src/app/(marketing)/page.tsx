import Experience from '@/features/marketing/home/experience';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>SiteLens</li>
            <li>link 1</li>
            <li>link 2</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>SiteLens</h1>
          <p>Step into your design</p>
          <Suspense fallback={<div>Loading...</div>}>
            <Experience />
          </Suspense>
        </section>
      </main>
      <footer>All rights reserved</footer>
    </>
  );
}
