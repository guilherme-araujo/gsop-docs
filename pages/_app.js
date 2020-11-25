import { MDXProvider } from '@mdx-js/react'
import '../style/index.css'

function MyApp ({ Component, pageProps })  {
  console.log(pageProps)
  return (
    <MDXProvider >
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp