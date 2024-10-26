// src/pages/index.js

import Head from "next/head";
import Navbar from "../components/Navbar";
import Abouti from "../components/About"
export default function About() {
  return (
    <div>
      <Head>
        <title>Lardi Invest</title>
        <meta name="LardiInvest" content="LardiInvest-ks" />
      </Head>
      <Navbar />
      <Abouti/>
     
    </div>
  );
}
