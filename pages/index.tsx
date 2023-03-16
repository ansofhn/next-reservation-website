import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Promote from "@/components/Promote";
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
        {/* <Promote /> */}
        {/* <Category /> */}
      </LandingPageLayout>
    </div>
  );
}
