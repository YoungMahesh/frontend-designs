import Head from "next/head";
// import Link from "next/link";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export const companyTypes = [
  {
    label: "Unregistered",
    value: "Unregistered",
  },
  {
    label: "Proprietorship",
    value: "Proprietorship",
  },
  {
    label: "Private Limited",
    value: "Private Limited",
  },
  {
    label: "Partnership",
    value: "Partnership",
  },
  {
    label: "Public Limited",
    value: "Public Limited",
  },
  {
    label: "LLP",
    value: "LLP",
  },
  {
    label: "Trust",
    value: "Trust",
  },
  {
    label: "Society",
    value: "Society",
  },
  {
    label: "NGO",
    value: "NGO",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>RazorpayX</title>
        <meta name="description" content="demo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  grid place-items-center">
        <div className="sidebar1 mr-auto grid min-h-screen w-full max-w-xs place-items-center p-4">
          <div className="grid gap-4">
            <div>
              <h3>Set up your account</h3>
              <p>Let&apos;s set up your account details🚀</p>
            </div>
            <Input
              type="text"
              label="Your name"
              labelPlacement="outside"
              placeholder="Enter your full name"
              radius="none"
            />

            <Input
              type="text"
              label="Contact number"
              labelPlacement="outside"
              placeholder="Set your contact number"
              radius="none"
            />

            <Select
              labelPlacement={"outside"}
              label="Buisness Category"
              placeholder="-- Select Option --"
              className="max-w-xs"
              radius="none"
              popoverProps={{ classNames: { content: "rounded-none" } }} // box of select-items
            >
              {companyTypes.map((cType) => (
                <SelectItem
                  key={cType.value}
                  value={cType.value}
                  className="rounded-none"
                >
                  {cType.label}
                </SelectItem>
              ))}
            </Select>

            <p>
              By signing up you agree to our privacy policy and terms of use.
            </p>
            <div>
              <Button color="primary" radius="none" className="w-full">
                Continue &gt;
              </Button>
              <Link href="#">Login to a different account</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
