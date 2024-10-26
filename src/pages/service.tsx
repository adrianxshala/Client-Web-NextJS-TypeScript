import Head from "next/head";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Serviice() {
  return (
    <div>
      <Head>
        <title>Lardi Invest</title>
        <meta name="Lardi Kuci" content="Lardi Invest Suharek" />
      </Head>

      <Navbar />
      <Card />
      <Footer />
      <Copyright />
    </div>
  );
}
