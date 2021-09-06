import Link from 'next/link'
import '../styles.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export function reportWebVitals(metrics) {
  switch (metrics.name) {
    case 'FCP': // First contentful paint
      break
    case 'LCP': // largest contentful paint
      break
    case 'CLS': // key analitic layout shift
      break
    case 'FID': // First input delay
      break
    case 'TTFB': // time to first bite
      break
    case 'Next.js-hydratation':
      break
    case 'Next.js-route-change-to-render':
      break
    case 'Next.js-render':
      break
    default:
      break
  }
}

export default App
