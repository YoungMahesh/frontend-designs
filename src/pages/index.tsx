import Head from "next/head";
import AdSignup from "~/components/sign-up/Ad.Signup";
import SidebarSignup from "~/components/sign-up/Sidebar.Signup";

export default function Home() {
  return (
    <>
      <Head>
        <title>RazorpayX</title>
        <meta name="description" content="demo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid-1">
        <SidebarSignup />
        <AdSignup />
      </main>
    </>
  );
}
