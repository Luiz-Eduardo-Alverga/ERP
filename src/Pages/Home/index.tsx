import { Helmet } from 'react-helmet-async'

export function HomePage() {
  return (
    <div>
      <Helmet title="Home" />
      <h1>Hello World</h1>
    </div>
  )
}
