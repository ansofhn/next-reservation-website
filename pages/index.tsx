import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Promote from "@/components/Promote";
import Recommendation from "@/components/Recommendation";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white">
      <LandingPageLayout>
        <Head>
          <title>Tourist Reservation - Home</title>
        </Head>
        <Hero />
        {/* <Category /> */}
        <Recommendation />
        <Promote />
      </LandingPageLayout>
    </div>
  );
}
