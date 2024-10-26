// src/pages/index.js
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Card from "../components/Card";
import Contacti from "../components/Contacti";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lardi Invest</title>
        <meta name="LardiInvest" content="Lardi Invest Prizeren" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Hero />
      <Card />
      <About />
      <Contacti />
      <Footer />
      <Copyright />
    </div>
  );
}
