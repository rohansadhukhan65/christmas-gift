import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <Hero/>
    </>
  );
}
