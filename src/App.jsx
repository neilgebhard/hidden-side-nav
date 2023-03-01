import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className='bg-gray-800'>
      <div
        className={`bg-gray-100 min-h-screen transition origin-top-left relative ${
          isOpen && '-rotate-12'
        }`}
      >
        <div
          className={`w-40 h-40 bg-emerald-800 rounded-full -top-20 -left-20 fixed transition duration-300 ${
            isOpen && '-rotate-90'
          }`}
        >
          <button
            className='text-white absolute h-16 w-16 text-2xl top-1/2 left-1/2'
            onClick={() => setIsOpen(true)}
          >
            O
          </button>
          <button
            className='text-white absolute h-16 w-16 text-2xl top-1/2 right-1/2 rotate-90'
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
        <nav>
          <ul
            className={`list-none absolute bottom-32 -left-24 text-white text-xl space-y-10 transition delay-150 duration-300 ${
              isOpen ? '-translate-x-0' : '-translate-x-32'
            }`}
          >
            <li>
              <a href='#' className='hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className='max-w-3xl mx-auto px-20 py-10'>
          <article className='prose lg:prose-xl'>
            <h1>Rotating Nav</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              corporis qui inventore soluta officia dicta placeat quae,
              necessitatibus quaerat voluptatum beatae ad alias quia ab odit.
              Accusamus culpa architecto sapiente.
            </p>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia quas nobis optio molestiae numquam, id facilis saepe
                vero ullam laborum. Alias ea, modi dolores placeat facere sit
                voluptatum pariatur nemo.
              </p>
            </blockquote>
          </article>
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            corporis qui inventore soluta officia dicta placeat quae,
            necessitatibus quaerat voluptatum beatae ad alias quia ab odit.
            Accusamus culpa architecto sapiente.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
