import Experience from '@/app/(marketing)/components/experience'

export default function Home() {
  return (
    <>
      {/* <header>
        <nav>
          <ul>
            <li>SiteLens</li>
            <li>link 1</li>
            <li>link 2</li>
          </ul>
        </nav>
      </header> */}
      <main className="h-full">
        <section className="h-full">
          {/* <h1>SiteLens</h1>
          <p>Step into your design</p> */}

          <Experience />
        </section>
      </main>
      {/* <footer>All rights reserved</footer> */}
    </>
  )
}
