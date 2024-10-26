import Head from "next/head";
import CompletedProjects from "../components/CompletedProject";
import Navbar from "../components/Navbar";

export default function Project() {
  return (
    <div>
      <Head>
        <title>Lardi Invest</title>
        <meta name="LardiInvest" content="Lardi Invest Kosovo" />
      </Head>
      <Navbar />
      <CompletedProjects />;
    </div>
  );
}
