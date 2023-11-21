import Head from "next/head";
import AdSignup from "~/components/sign-up/Ad.Signup";
import SidebarSignup from "~/components/sign-up/Sidebar.Signup";
import LoadingOverlay from "react-loading-overlay-ts";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>RazorpayX</title>
        <meta name="description" content="demo site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <LoadingOverlay
          fadeSpeed={500}
          active={true}
          className="min-h-screen"
          spinner={
            <div className="mb-8 flex justify-center">
              <Image
                src="/icons/loading2.svg"
                width={120}
                height={120}
                alt="loading2"
                priority={true}
              />
            </div>
          }
          text={
            <div>
              <p className="text-default-600">With Razorpay, you can...</p>
              <p>pay even without a/c details using Payout Links</p>
            </div>
          }
        ></LoadingOverlay>
      ) : (
        <main className="grid-1">
          <SidebarSignup />
          <AdSignup />
        </main>
      )}
    </>
  );
}
