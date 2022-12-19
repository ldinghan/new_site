import NavBar from '../components/Navbar';
import LinksTable from '../components/LinksTable';
import Head from 'next/head';

export default function Links() {
    return (
      <>
        <Head>
          <title>Ding Han's site | Links</title>
        </Head>
        <NavBar></NavBar>  
        <div className="pt-[8vh] px-[1vw] w-screen h-screen flex items-center flex-col">
            <p className='text-white text-center mt-5 font-bold text-5xl font-ChakraPetch'>Feel free to check out these links:</p>
                <LinksTable></LinksTable>
        </div>
      </>
    )
  }