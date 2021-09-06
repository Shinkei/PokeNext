import Head from 'next/head'
import router, { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  function hangleGoToPokemon(event) {
    event.preventDefault()
    router.push('/pokemon')
  }
  return (
    <>
      <Head>
        <title>My nextjs site</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>Welcome, Explorer</div>
      <button onClick={hangleGoToPokemon}>Go to Pokemon</button>
    </>
  )
}

export default Home
