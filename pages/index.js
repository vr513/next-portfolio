import Head from 'next/head'
import Home from '../components/Home';
import NavBar from '../components/NavBar'
export default function Index() {

  return (
    <>
      <Head>
        <title>Home - Varad Rajopadhye</title>
      </Head>
      <NavBar />
      <Home />
    </>
  )
}