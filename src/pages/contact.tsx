import Head from "next/head";
import Navbar from "../components/Navbar";
import Contacti from "../components/Contacti";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
export default function Contact() {
  return (
    <div>
      <Head>
        <title>Lardi Invest</title>
        <meta name="LardiInvest" content="Lardi Invest Ndertim" />
      </Head>
      <Navbar />
      <Contacti />
      <Footer />
      <Copyright />
    </div>
  );
}
