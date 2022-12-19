import NavBar from "../components/Navbar";
import Head from 'next/head';
import AboutText from "../components/AboutText";

export default function About() {
    return (
        <>
        <Head>
            <title>Ding Han's site | About</title>
        </Head>
        <NavBar></NavBar>
        <AboutText></AboutText>
        </>
    )
}