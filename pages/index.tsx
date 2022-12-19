import NavBar from '../components/Navbar';
import HomeText from '../components/HomeText';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>Ding Han&apos;s site | Home</Head>
      <NavBar></NavBar>
      <HomeText></HomeText>
    </>
  )
}
