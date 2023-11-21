import Image from "next/image";
export default function AdSignup() {
  return (
    <div className="bg-x grid place-items-center">
      <div className="m-auto flex flex-col items-center">
        <Image
          src={"/razorpayX.svg"}
          width={155}
          height={32}
          alt="RazorpayX"
          className="mb-4"
        />
        <h2 className="mb-2">Banking made awesome</h2>
        <h2 className="">for startups</h2>
      </div>
    </div>
  );
}
