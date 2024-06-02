import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StartGivingthischristmas from "@/components/StartGivingThisChirstmas/StartGivingthischristmas";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>

      <Header />
      <Hero/>
      <StartGivingthischristmas/>
    </>
  );
}
