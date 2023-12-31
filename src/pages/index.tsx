import Head from "next/head";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Designs</title>
        <meta name="description" content="demo site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-screen place-items-center">
        <div className="grid gap-8">
          <p>
            <Link href="/login" className="text-2xl text-white underline">
              RazorpayX Login
            </Link>
          </p>
          <p>
            <Link href="/signup" className="text-2xl text-white underline">
              RazorpayX Signup
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
