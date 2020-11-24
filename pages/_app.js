import { MDXProvider } from '@mdx-js/react'
import '../style/index.css'

const mdComponents = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />,
}

function MyApp ({ Component, pageProps })  {

  const {originalType, mdxType, ...pProps} = pageProps
  
  console.log(typeof(Component))
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pProps} />
    </MDXProvider>
  )
}

export default MyApp