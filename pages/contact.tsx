import NavBar from "../components/Navbar";
import Head from 'next/head';
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Ding Han&apos;s site | Contact</title>
            </Head>
            <NavBar></NavBar>
            <ContactForm/>
        </>
    )
}