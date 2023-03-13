import Hero from "@/components/Hero";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <LandingPageLayout>
        <Head>
          <title>Tourist Reservation - Home</title>
        </Head>
        <Hero />
      </LandingPageLayout>
    </div>
  );
}
