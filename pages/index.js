import Head from 'next/head'
import Home from '../components/Home';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';



export default function Index({analytics}) {

  return (
    <>
      <Head>
        <title>Home - Varad Rajopadhye</title>
      </Head>
      <NavBar />
      <Home analytics={analytics} />
      <Footer />
    </>
  )
}