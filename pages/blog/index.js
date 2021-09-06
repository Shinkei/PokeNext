import Head from 'next/head'
import Link from 'next/link'

function Blog() {
  return (
    <>
      <Head>
        <title>My Blog about pokemon</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href='/'>Go back home</Link>
          </li>
        </ul>
      </nav>
      <div>Welcome to my blog</div>
    </>
  )
}

export default Blog
